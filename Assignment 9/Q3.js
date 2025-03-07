function modifyArray(arr,newElement) {
    arr.push(newElement);
    arr.pop();
    return arr;
}

let myArray=[1,2,3,4,5];
console.log(modifyArray(myArray,6));