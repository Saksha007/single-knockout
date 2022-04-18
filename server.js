
// function getbaselog(x,y) {
//     return Math.ceil(Math.log(y)/Math.log(x)-1)
// }

// console.log(getbaselog(2,10));
// // console.log(roundoff(3,10));

// ------------------------------------------------------------


var NUMBER_OF_PARTICIPANTS = 7; // Set the number of participants
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

var participants = Array.from({ length: NUMBER_OF_PARTICIPANTS }, ( l,p) => p + 1);
var bracket = getBracket(participants);

console.log(bracket);

function getBracket(participants) {
    var participantsCount = participants.length;
    // math.ceil() is basically used for round off number 
    var rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));
    var bracketSize = Math.pow(2, rounds);
    var requiredByes = bracketSize - participantsCount;
    var requirematches = participants.length - 1;

    console.log("Number of participants: {0}".format(participantsCount));
    console.log("Number of rounds: {0}".format(rounds));
    console.log("Bracket size: {0}".format(bracketSize));
    console.log("Required number of byes: {0}".format(requiredByes));
    console.log("Require number of matches : {0}".format(requirematches));

    if (participantsCount < 2) {
        return [];
    }

    var matches = [[1,2]];

    for (var round = 1; round < rounds; round++) {
        var roundMatches = [];

        // Math.pow(2, round + 1) + 1; means [ (2 to the power round +1 ), =>  lets round = 3 so 2 to the power 3=>8 +1 = 9 ] 
        var sum = Math.pow(2, round + 1) + 1;

        for (var i = 0; i < matches.length; i++) {
            var home = changeIntoBye(matches[i][0], participantsCount);
            var away = changeIntoBye(sum - matches[i][0], participantsCount);
            roundMatches.push([home, away]);
            home = changeIntoBye(sum - matches[i][1], participantsCount);
            away = changeIntoBye(matches[i][1], participantsCount);
            roundMatches.push([home, away]);
        }
        matches = roundMatches;

    }

    return matches;
}

function changeIntoBye(seed, participantsCount) {
    // return seed <= participantsCount ?  seed : '{0} (= bye)'.format(seed);  
     return seed <= participantsCount ? seed : null;
}



  