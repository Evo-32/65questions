// Function for 60 
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Function for 61
function containsOnlyDigits(inputString) {
    return /^\d+$/.test(inputString);
}

// Function for 62
function countWords(sentence) {
    const words = sentence.split(/\s+/);
    return words.length;
}

// Function for 63 
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function for 64 
function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
    }
}

// Function for 65a
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

// Function for 65b 
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        default:
            return 'Invalid day';
    }
}
//// Function for 65c 
function getGrade(score) {
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        default:
            return 'F';
    }
}


// Function for 65d 
function trafficLightColor(code) {
    switch (code) {
        case 1:
            return 'Red';
        case 2:
            return 'Yellow';
        case 3:
            return 'Green';
        default:
            return 'Invalid code';
    }
}

// Function for 65e 
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'January';
        default:
            return 'Invalid month';
    }
}

// Function for 65f 
function executeOperation(option) {
    switch (option) {
        case 1:
        
            break;
        case 2:
            
            break;
    
        default:
            console.log('Invalid option');
    }
}
//functio for 65g 
function currencyConverter(amount, sourceCurrency, targetCurrency) {
    
}
//function for 65h
function calculateShapeArea(shape, parameters) {
    switch (shape) {
        case 'circle':
           
            break;
        case 'square':
           
            break;
        case 'triangle':
            
            break;
        default:
            console.log('Invalid shape');
    }
}
//function for code 65i
function detectSeason(month) {
    switch (month) {
        case 3:
        case 4:
        case 5:
            return 'Spring';
        case 6:
        case 7:
        case 8:
            return 'Summer';
        default:
            return 'Invalid month';
    }
}


// Function for 66a 
function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Function for 66b 
function printEvenNumbers(arr) {
    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

// Function for 66c 
function reverseArray(arr) {
    return arr.reverse();
}

// Function for 66d 
function filterArray(arr) {
    return arr.filter(num => num >= 10);
}

// Function for 66e 
function calculateArrayAverage(arr) {
    const sum = arraySum(arr);
    return sum / arr.length;
}

// Function for 66f 
function searchArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Function for 66g
function findDuplicateElements(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

// Function for 66h 
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}



// Function for 67a 
function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(key);
    }
}

// Function for 67b 
function printObjectValues(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
}

// Function for 67c 
function searchObjectKey(obj, targetKey) {
    for (let key in obj) {
        if (key === targetKey) {
            return true;
        }
    }
    return false;
}

// Function for 67d 
function modifyObjectValues(obj) {
    for (let key in obj) {
    }
}

// Function for 67e 
function filterObject(obj, condition) {
    const filteredObj = {};
    for (let key in obj) {
        if (condition(obj[key])) {
            filteredObj[key] = obj[key];
        }
    }
    return filteredObj;
}

// Function for 67f 
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Function for 67g 
function getObjectSize(obj) {
    return Object.keys(obj).length;
}

// Function for 67h 
function accessNestedObject(obj) {
   
}

// Function for 67i 
function sortObjectKeys(obj) {
    return Object.keys(obj).sort();
}




// Function for 68a 
function powerFunction(base, exponent) {
    return Math.pow(base, exponent);
}

// Function for 68b 
function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

// Function for 68c 
function sumOfDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Function for 68d 
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function for 68e
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
