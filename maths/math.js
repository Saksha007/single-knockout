function play(numPlayers){
    var rounds =  Math.log(numPlayers)/Math.log(2)-1;
    var plyrs = [1,2];
    for(var i=0;i<rounds;i++){
      plyrs = nextLayer(pls);
    }
    return plyrs;
    function nextLayer(plyrs){
      var out=[];
      var length = plyrs.length*2+1;
      plyrs.forEach(function(d){
        out.push(d);
        out.push(length-d);
      });

    //   return out
      console.log(out);;
    }
  }
  