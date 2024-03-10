// Function for 16a - Sort and Arrange Array in Ascending Order
function sortAndArrangeArray(arr) {
    const sortedArray = [...arr].sort((a, b) => a - b);
    const firstThree = sortedArray.slice(0, 3);
    const lastThree = sortedArray.slice(-3);
    return [...firstThree, ...sortedArray, ...lastThree];
}

// Function for 17 - Determine Age Classification
function ageClassification(age) {
    if (age >= 0 && age <= 12) {
        return 'MIMICRY';
    } else if (age >= 13 && age <= 19) {
        return 'SELF-DISCOVERY';
    } else if (age >= 20 && age <= 45) {
        return 'COMMITMENT';
    } else if (age >= 46) {
        return 'LEGACY';
    } else {
        return 'Invalid age';
    }
}

// Function for 18 - Calculate BMI and Return Classification
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

// Function for 19 - Count Characters in a String (excluding spaces)
function countCharactersWithoutSpaces(str) {
    const stringWithoutSpaces = str.replace(/\s/g, '');
    return stringWithoutSpaces.length;
}

// Function for 20 - Display Even Numbers Between 1 and 100
function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

// Function for 21 - Calculate Square of a Number
function calculateSquare(number) {
    return number ** 2;
}

// Function for 22 - Check if a Number is Even
function isEven(number) {
    return number % 2 === 0;
}

// Function for 23 - Check if a Number is Odd
function isOdd(number) {
    return number % 2 !== 0;
}

// Function for 24 - Return the Maximum of Two Numbers
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// Function for 25 - Return the Minimum of Two Numbers
function findMinimum(num1, num2) {
    return Math.min(num1, num2);
}

// Function for 26 - Calculate Factorial of a Number
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

// Function for 27 - Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function for 28 - Check if a String is a Palindrome
function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
}

// Function for 29 - Display Odd Numbers Between 1 and 100
function displayOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}
