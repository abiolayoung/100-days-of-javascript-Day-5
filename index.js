"use strict"
//conditional branches in javascript
//if statement evaluate a value in parenthesses and if the condition is true, it output a block of code
let year = prompt("In which year were you born");

if(year == 1997){
    alert("happy birthday")
    alert("you're very smart")
}

//if 0 is used inside an if statement, it is going to return false e.g and if we have 1 in our condition, it will also return true
//because 0 is a falsy value and 1 is a truthy value in our comparison operation
if(0){
    ...
}

if(1){
    ...
}
//condition declaration

let year = prompt("enter your year")
let cond = (year==2015)
if(cond){
    alert("you are a star")
} else{
    alert("you are not a star")
}

//else-if statement can be used to fulfil multiple conditions
 let age = prompt("Enter your age")
 if (age < 30){
    alert(`Congratulations you are ${age} years old, and eligible  for a canada student VISA!`)
 }else if(age == 30){
    alert("you may be eligible for PGD only")
 } else {
    alert(`you are ${age} years old, and have exceeded this visa category age limit`)
 }

 //conditional operator known as - the question mark operator (turnary operator)

 //let result = condition ? value1 : value2
 let year = prompt("In which year was football wordlcup held");
 let accessAllowed = (year==2000) ? true : false;
 alert(accessAllowed);

let age = prompt('age?', 18);
let message = (age<3) ? 'Hello young' :
              (age==18) ? 'You are eligible' :
              (age>18) ? 'you are old man' :
              'what an unusual age'
              alert(message);

let age = prompt('age?', 18)
let message;
if(age<3){
    message = 'Hi'
} else if(age<18){
    message = 'Hello'
} else if (age<100){
    message = 'Greetings'
} else{
    message = 'What an unusual Age'
}

alert(message)

//the question mark operation is less readable and not Adviceable to be used
