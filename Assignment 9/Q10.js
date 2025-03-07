function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbers = [10, 20, 30, 40, 50];
console.log("Sum of numbers:", sumArray(numbers));