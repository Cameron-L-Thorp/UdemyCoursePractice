//Old method of creating properties and methods for classes

class OldClass {
    myProperty;
    constructor () {
        this.myProperty = 'This way requires a constructor to automatically assign the property';
    }

    myMethod () {
        console.log("If this method interacted with properties of a class, it would require you to use the 'this' keyword.");
    }
}

//New method and property instantiation for classes technically this is called ES6/Babel

class NewClass {
    myProperty = 'This way does not require a constructor for this value.';

    myMethod = () => {console.log("New methods don't require the 'this' keyword when interacting with object properties.");}
}