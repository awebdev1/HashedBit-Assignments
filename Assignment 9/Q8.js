function getObjectKeys(obj) {
    return Object.keys(obj);
}

const person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
    country: "USA"
};

const keys = getObjectKeys(person);
console.log("Object keys:", keys);