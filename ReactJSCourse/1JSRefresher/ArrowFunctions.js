//old way of writing functions in js
function printMyName(name)
{
    console.log(name);
}
printMyName('Cameron')

//solves the issue of using the 'this' keyword in js
const printName = (name) => {
    console.log(name)
}
//It also can ommit the parenthesis for input parameters if there is only one input parameter
//This is also a proper format for single step functions
const multiply = number => number * 2;
console.log(multiply(4)); //will output 8
//Without inline syntax
const divide = number => {
    return number / 2;
}