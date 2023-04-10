//challenge #1
console.log("Challenge #1");

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2) {
  // moment of truth
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
let flower1 = 3;
let flower2 = 4;

if (lovefunc(flower1, flower2)) {
  console.log("They are in love!");
} else {
  console.log("They are not in love :(");
}

//challenge #2
console.log("Challenge #2");

//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
let numbers = [1, -4, 7, 12];
let result = positiveSum(numbers);
console.log(result); // Output: 20

//challenge #3
console.log("Challenge #3");

// code on javascript:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operator, value1, value2) {
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      throw new Error("Invalid operator");
  }
}
console.log(basicOp("+", 4, 7)); // Output: 11
console.log(basicOp("-", 15, 18)); // Output: -3
console.log(basicOp("*", 5, 5)); // Output: 25
console.log(basicOp("/", 49, 7)); // Output: 7
//console.log(basicOp("%", 49, 7)); //Uncaught Error: Invalid operator

//challenge #4
console.log("Challenge #4");
// Write a program that prints the numbers from 100 to 200 to the console, with three exceptions: - If the number is a multiple of 3, print the String "Loopy". - If the number is a multiple of 4, print the String "Lighthouse". - If the number is a multiple of both 3 and 4, print the String "LoopyLighthouse".
for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  }

  console.log(num);
}

// Make password.js take in a single string as a command line argument and print out an obfuscated version of that password, using the rules defined below.
//challenge #5
console.log("Challenge #5");
// Read the password from the command line argument

const password = process.argv[2];
// Define the obfuscate function
function obfuscate(password) {
  // Initialize the obfuscated password string
  let result = "";
  // Loop through each character in the password
  for (let i = 0; i < password.length; i++) {
    //condition
    if (password[i] == "a") {
      result += "4";
    } else if (password[i] == "e") {
      result += "3";
    } else if (password[i] == "o") {
      result += "0";
    } else if (password[i] == "l") {
      result += "1";
    } else {
      result += password[i]; // Otherwise, append the original character to the obfuscated password
    }
  }
  // Return the obfuscated password
  return result;
}
// Obfuscate the password and print the result to the console
console.log(obfuscate(password));

//challenge #6
console.log("Challenge #6");

function isPalindrome(w) {
  // Removing spaces and converting string to lowercase
  w = w.toLowerCase().replace(/\w/g, "");

  // Reversing the string
  let reversed = "";

  for (let i = w.length - 1; i >= 0; i--) {
    reversed += w[i];
  }

  // Comparing the original string with the reversed string
  return w === reversed;
}
// Test the isPalindrome function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("No lemon no melon")); // true
console.log(isPalindrome("hello world")); // false

//challenge #7
console.log("Challenge #7");

function reverseString(string) {
  reversed = "";
  for (let i = string.length - 1; i >= 0; i++) {
    reversed += string[i];
  }
  return reversed;
}
console.log(reverseString("Hello"));

//challenge #8
console.log("Challenge #8");
/*DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */

function timeSinceMidnight(h, m, s) {
  // Calculate the total number of milliseconds
  // for hours, minutes, and seconds
  let hoursInMilliseconds = h * 60 * 60 * 1000;
  let minutesInMilliseconds = m * 60 * 1000;
  let secondsInMilliseconds = s * 1000;

  // Add up the total number of milliseconds
  let totalMilliseconds = hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;

  return totalMilliseconds;
}
// challenge #9
//Find Maximum and Minimum Values of a List
console.log("Challenge #9");
/*Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors. */
//Psuedocode
/*
min(list)
  minValue = first element of list
  for each element in list starting from the second element
    if current element is less than minValue
      set minValue to current element
  return minValue

max(list)
  maxValue = first element of list
  for each element in list starting from the second element
    if current element is greater than maxValue
      set maxValue to current element
  return maxValue
 */
function min(list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }
  return minValue;
}

function max(list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxValue) {
      maxValue = list[i];
    }
  }
  return maxValue;
}

/*function findMaxMin(numbers) {
  let maxNum = numbers[0];
  let minNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }
  return { max: maxNum, min: minNum };
} */

// challenge #10
console.log("Challenge #10");
/*Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */
const stringToNumber = function(str) {
  return Number(str);
}


// challenge #11
console.log("Challenge #11");
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

function isIsogram(str) {
  // Convert string to lowercase to ignore case
  str = str.toLowerCase();

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character repeats in the rest of the string
    if (str.indexOf(str[i], i + 1) !== -1) {
      return false;
    }
  }

  // If no repeating characters found, return true
  return true;
}

// Example usage:
console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("aba")); // Output: false
console.log(isIsogram("moOse")); // Output: false
