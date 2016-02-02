var yourName = prompt("What is your name?");

  if (yournName != null){
    document.getElementById("sayHello").innerHTML = "Hello " + yourName;
  } else {
    alert("Please enter your name next time");


var age = 12;
 
if (age < 21){
  document.write("You are not old enough to drink <br />");
} else {
  document.write("Enjoy your drink "<br />");
}
 
document.write("true || false = ", true || false, "<br />");
 
document.write("!true = ", ! true, "<br />");
 
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
 
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");



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


<script type="text/javascript"></script>
var cust1 = {
  name: "Duyen Tran",
  street: "111 Here",
  city: "Merced",
  state: "CA",
  email: "dtran35@ucmerced.edu",
  balance: 3.50,
  payDownBal: function(amtPaid){
    this.balance -= amtPaid;
  },
  addToBal: function(amtCharged){
    this.balance += amtCharged;
  }
};
 
document.write("Customer Name : ", cust1.name, "<br />");
 
cust1.street = "215 Main St";
document.write("Customer Address : ", cust1.street, "<br />");

cust1.country = "US";
document.write("Customer Country : ", cust1.country, "<br />");
 
delete cust1.country;
 
for (var prop in cust1) {
    if (cust1.hasOwnProperty(prop)) {
        document.write(prop, "<br />");
    }
}
 
document.write("name in cust1 : ", "name" in cust1, "<br />");
 
function getInfo(cust){
  return cust1.name + " lives at " + cust1.street + " in " + cust1.city + " " + cust1.state + " email : " + cust1.email + " and has a balance of $" + cust1.balance;
}
 
document.write(getInfo(cust1), "<br />");
 
cust1.payDownBal(20.50);
cust1.addToBal(10.00);
 
document.write(getInfo(cust1), "<br />");

function Customer(name, street, city, state, email, balance){
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.email = email;
  this.balance = balance;
 
  this.payDownBal = function(amtPaid){
    this.balance -= amtPaid;
  };
  this.addToBal = function(amtCharged){
    this.balance += amtCharged;
  };
}


Customer.prototype.isCreditAvail = true;
 
Customer.prototype.toString = function(){
    return this.name + " lives at " + this.street + " in " + this.city + " " + this.state + " email : " + this.email + " and has a balance of $" + this.balance.toFixed(2) + " Creditworthy : " + this.isCreditAvail;
};
 
document.write(cust2.toString());
 

