//module wrapper function
// (function (exports, require, module, _filename, _dirname){

//     //person.js
// })

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greeting() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

module.exports = Person