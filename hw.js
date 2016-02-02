
var yourName = prompt("What is your name?");

  if (yournName != null){
    document.write("Hello " + yourName + "<br>");
  }
  else {
    document.write("PLease enter your name next time");
  }

var Duyen = {
  name: "Duyen",
  ign: "duyenny",
  age: 21,
  location: "Merced",
};
console.log(Duyen);

var age = 12;
 
if (age < 21){
  document.write("You are not old enough to drink <br>");
} else {
  document.write("Have fun drinking <br>");
}


var i = 1;
while (i <= 10){
  document.write(i, ", ");
  i++;
}
document.write("<br />");
 
do{
  var guess = prompt("Guess a number between 1 and 5");
}while(guess != 2)
 
alert("You guessed it! 2 was the number");
 

for(j = 0; j <= 5; j++){

  if((j % 2) == 0){
    continue;
  }

  if(j == 2){
    break;
  }
  document.write(j, ", ");
}

function inArray(arrayToCheck, value){
  for(i = 0; i < arrayToCheck.length; i++){
    if(arrayToCheck[i] === value){
      return true;
    }
  }
  return false;
}

var array = ["cats", "dogs", "birds", "fishes"];
console.log(array);
console.log("arry.length");
for (var i = array.length -1; i >=0; i++) {
  document.write(pets(array[i]));
}
