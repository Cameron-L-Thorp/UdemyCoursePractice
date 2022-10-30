//Let (variable values) and Const(unchanging variables) are ways of creating variables
var myName = 'Cameron'; //var acts like let, but is an older version of js
console.log(myName);

myName = 'Ricky';
console.log(myName);
// this will print out 'Cameron' and then 'Ricky' to the log

let myName = 'Cameron';
console.log(myName);

myName = 'Ricky';
console.log(myName);
//this will act in the same way that var does, but uses let instead

const myName2 = 'Cameron';
console.log(myName);

myName2 = 'Ricky';
console.log(myName2);
//this will print out 'Cameron' and then throw an error, as the constant is no longer the original value
