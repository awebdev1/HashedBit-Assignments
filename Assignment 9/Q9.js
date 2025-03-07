function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const objectA = { name: "Alice", age: 30 };
const objectB = { occupation: "Engineer", country: "USA" };

const mergedObject = mergeObjects(objectA, objectB);
console.log(mergedObject);