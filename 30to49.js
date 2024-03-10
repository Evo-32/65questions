// Function for 30 - Display Multiples of 5
function displayMultiplesOf5(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i * 5);
    }
}

// Function for 31 - Return the Square Root of a Given Number
function calculateSquareRoot(number) {
    return Math.sqrt(number);
}

// Function for 32 - Return the Bigger Number between Two Numbers
function findBiggerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function for 33 - Convert a String into Capital Letters
function convertToUpperCase(inputString) {
    return inputString.toUpperCase();
}

// Function for 34 - Modify String at a Specific Position
function stringModifier(inputString, position, replacement) {
    const arrayString = inputString.split('');
    arrayString[position] = replacement;
    return arrayString.join('');
}

// Function for 35 - Count Number of Vowels in a String
function countVowels(inputString) {
    const vowels = inputString.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

// Function for 36 - Count Number of Consonants in a String
function countConsonants(inputString) {
    const consonants = inputString.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return consonants ? consonants.length : 0;
}

// Function for 37 - Find Index of a Given Character in a String
function findIndexOfCharacter(inputString, character) {
    return inputString.indexOf(character);
}

// Function for 38 - Remove Duplicates from an Array
function removeDuplicatesFromArray(arr) {
    return [...new Set(arr)];
}

// Function for 39 - Check if a Value is Present in an Array
function isValuePresentInArray(arr, value) {
    return arr.includes(value);
}

// Function for 40 - Square Each Element of an Array
function squareEachElement(arr) {
    return arr.map(num => num ** 2);
}

// Function for 41 - Return the First n Elements of an Array
function getFirstNElements(arr, n) {
    return arr.slice(0, n);
}

// Function for 42 - Remove the Last Element from an Array
function removeLastElement(arr) {
    return arr.slice(0, -1);
}

// Function for 43 - Sort an Array of Numbers in Ascending Order
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Function for 44 - Check if All Elements in an Array are Positive
function areAllElementsPositive(arr) {
    return arr.every(num => num > 0);
}

// Function for 45 - Calculate Sum of Even Numbers in an Array
function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => (num % 2 === 0) ? sum + num : sum, 0);
}

// Function for 46 - Convert Array of Strings to Uppercase
function convertArrayToUppercase(arr) {
    return arr.map(str => str.toUpperCase());
}

// Function for 47 - Generate a Random Number Between a Given Range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function for 48 - Return the Reverse of an Array
function reverseArray(arr) {
    return arr.reverse();
}

// Function for 49 - Calculate Fibonacci Sequence up to n Numbers
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
