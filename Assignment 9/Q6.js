const person = {
    name: "John",
    age: 30,
    occupation: "Worker"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and work as a ${obj.occupation}.`);
}

greetPerson(person);