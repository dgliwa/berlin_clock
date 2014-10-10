String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var off = "O";

var calculateRow = function(totalLights, lightsTurnedOn, lightColor){
  return Array(lightsTurnedOn + 1).join(lightColor) + Array(totalLights - lightsTurnedOn + 1).join(off);
}


var berlinClock = function(number){
  var split = number.split(":");
  var clock = ""
  var top;
  if( Math.floor((parseInt(split[2]) / 2)) % 2 === 1 ){
    top = "O";
  }
  else{
    top = "Y";
  }

  var hours = parseInt(split[0]);

  var lightsRowThree = hours % 5;
  var rowThree = calculateRow(4, lightsRowThree, "R");;

  var lightsRowFour = Math.floor(hours / 5) % 5;
  var rowFour = calculateRow(4, lightsRowFour, "R");


  var minutes = parseInt(split[1]);

  var lightsRowTwo = Math.floor(minutes/5) % 12
  var rowTwo = calculateRow(11, lightsRowTwo, "Y");
  var redsRowTwo = Math.floor(minutes/15);
  for(var i = 0; i< redsRowTwo; i++){
    rowTwo = rowTwo.replaceAt(i+2, "R");
  }


  var lightsRowOne = minutes % 5;
  var rowOne = calculateRow(4, lightsRowOne, "Y");
  return top + "\n" + rowFour +"\n" + rowThree + "\n" + rowTwo + "\n" + rowOne;
}
