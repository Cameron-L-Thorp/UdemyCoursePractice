// ... is the spread or rest operator depending on its use

//The following are spread use cases
const originalArray = [1, 2, 3, 4, 5];

class OldClass {
    personName = 'Cameron';
    personAge = 23;
}

//includes the values of originalArray and adds the additional values to create the new Array
const newArray = [...originalArray, 6, 7, 8];

//This will create an object that has a new class based off of the OldClass with an additional property
const newObject = {...OldClass, profession: 'Programmer'}


//Rest use case allows for parameters to be expandable
//This will take any number of inputs and sort them with sortArgs is called
function sortArgs(...args) {
    args.sort();
}