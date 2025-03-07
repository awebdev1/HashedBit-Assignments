function scopeExample() {
    if (true) {
        var varVariable = "I am var"; // Function-scoped variable
        let letVariable = "I am let"; // Block-scoped variable
        const constVariable = "I am const"; // Block-scoped variable

        console.log(letVariable);
        console.log(constVariable);
    }

    console.log(varVariable);
    //Outside Function
    console.log(letVariable);
    console.log(constVariable);
}

scopeExample();
/* 
var is function scoped. Can be accessed outside function.
let is block scoped. Cannont be accessed outside function.
const is also block scoped but it cannot be reassigned after declaration.
*/
