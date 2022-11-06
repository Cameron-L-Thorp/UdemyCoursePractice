// ... is the spread or rest operator depending on its use

//The following are spread use cases
const originalArray = [1, 2, 3, 4, 5];

const OldCam = {
    personName: 'Cameron',
    personAge: 23
}

//includes the values of originalArray and adds the additional values to create the new Array output
//The newArray doesn't contain the old array, just the values that are present within it
const newArray = [...originalArray, 6, 7, 8];

//This will create an object based off of the OldCam object, with an additional property
const newCam = {...OldCam, profession: 'Programmer'}


//Rest use case allows for parameters to be expandable
//This will take any number of inputs and sort them with sortArgs is called
function sortArgs(...args) {
    args.sort();
    return args;
}

sortArgs(1);

sortArgs(9, 8, 7, 3, 2, 1);