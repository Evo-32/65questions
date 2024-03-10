// Function for 50 - Check if an Array is Sorted in Ascending Order
function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Function for 51 - Filter Out Negative Numbers from an Array
function filterOutNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// Function for 52 - Calculate Square Root of a Number
function calculateSquareRoot(number) {
    return Math.sqrt(number);
}

// Function for 53 - Find Median of an Array
function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
        return sortedArr[middle];
    }
}

// Function for 54 - Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

// Function for 55 - Check if a Given Year is a Leap Year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function for 56 - Find the Intersection of Two Arrays
function findArrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Function for 57 - Check if a Number is Prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function for 58 - Return the Power of a Number (Base, Exponent)
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Function for 59 - Calculate the Area of a Rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}