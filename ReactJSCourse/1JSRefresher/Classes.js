import person from "./ExportingModule";

class Human {
    constructor() {
        this.gender = 'male';
    }
    PrintGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Cameron'

    constructor() {
        super();
        this.name = 'CameronConst';
    }

    Hello = (name) => {
        console.log("Hello " + this.name);
    }
}

const cam = new Person();
person.Hello();
person.PrintGender();