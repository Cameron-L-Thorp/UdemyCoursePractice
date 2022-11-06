//primitive types allow for real copies of a number, copying the whole variable value

const numberOne = 1;
const numberTwo = numberOne;

//references copy the values from a variable or object and assign them to a new variable or object

const person = {
    name: 'Cameron'
};
const doppleganger = person;
//person and doppleganger have the same values, but they are not the same variable/object, just a new pointer to the same value stored in memory. Because of this, if the value of a property is changed for either reference, then both references will be changed

const newPerson = {
    ...person
};
//In order to avoid this, using a spread operator to add the properties will create a new object with the same values