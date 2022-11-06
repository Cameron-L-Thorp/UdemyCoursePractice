//This allows you to create a function that executes on each element within an array

const originalArray = [1, 2, 3];

const doubledArray = originalArray.map((num) => {
    return num * 2;
});

//This map method will return a new array that is created based on the values in the oritinal array
console.log(originalArray);
console.log(doubledArray);