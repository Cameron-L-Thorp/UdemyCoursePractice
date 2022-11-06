//Decructuring allows for each variable in an array or object to be assigned to a variable
const greetings = ['Good morning!', 'Good night.'];
[greeting, goodbye] = greetings;
//This should print out the phrases 'Good morning!' and then 'Good night.'
console.log(greeting);
console.log(goodbye);


//properties from objects are targeted by their property name
const Cameron = {
    fName: 'Cameron',
    age: 23,
    lName: 'Thorp'
};

({fName, age} = {fName: 'Cameron', age: 23, });
console.log(fName);
console.log(age);
