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

//challege #12
console.log("Challenge #12");
"use strict";

/* Question 00

Write a converter that will change Celsius to Fahrenheit and back again.

Your function should take in a number, and a boolean. The number will be the temperature in degrees, and the boolean will be whether to convert from C to F (true) or F to C (false). Your answer should be rounded to one decimal place, and returned as a Number, not a string.

If the first argument is not a number, return NaN for the result.

Examples:

- tempConverter(32, true) returns 89.6 as a result
- tempConverter(32, false) returns 0.0 as a result
- tempConverter(98.6, false) returns 37 as a result
- tempConverter("12", <anything>) returns NaN as a result

*/

const tempConverter = function(value, cToF) {

  /* IMPLEMENT ME */
  //If the first argument is not a number, return NaN for the result.
  if (typeof value !== 'number') {
    return NaN;
  }
  //Celsius to Fahrenheit
  //If cToF is true, the function converts Celsius to Fahrenheit using the formula (C * 1.8) + 32
  if (cToF) {
    return +Number((value * 1.8 + 32).toFixed(1));
  }
  //Fahrenheit to Celsius
  //If cToF is false, the function converts Fahrenheit to Celsius using the formula (F - 32) / 1.8
  return +Number(((value - 32) / 1.8).toFixed(1));

};
//challege 13
console.log("Challenge #13");
"use strict";

/* Question 01

Build a function called keyMatcher() which, when passed two objects and a string, will use the string to look up the key-value pair in each object and compare the values. If the two values are explicitly equal to each other, return true, otherwise return false if either the values or not the same, or both objects do not have that key.

Examples:

- keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a') returns true (since the value and type are the exact same)
- keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple") returns false since the values are completely different ("red" vs "green")
- keyMatcher({a: 1, b: 2, c: 3}, {a: "1", b: "2", c: "3"}, 'c') returns false since the values are different types (3 vs "3")
- keyMatcher({a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, 'b') returns false since b is not in the second object

*/

const keyMatcher = function(firstObj, secondObj, key) {

  /* IMPLEMENT ME */
  //If the key is not a non-empty string, return false
  if (typeof key !== "string" || key === "") {
    return false;
  }
  //Set val1, val2 to the value of firstObj and secondObj with its  keys
  const val1 = firstObj[key];
  const val2 = secondObj[key];

  //If any of the values are undefined, then return false
  if (val1 === undefined || val2 === undefined) {
    return false;
  }
  //If the values are equal, then return true
  return val1 === val2;

};


//challenge #14
console.log("Challenge #14");

"use strict";

/* Question 02

Implement a function called countWhich() which will take in a list of items and a callback, and it will return the number of elements which return a truthy value from the callback function.

If the first argument is not an array, our function should return false instead of a number.

Examples:

- countWhich([1, 2, 3, 4, 5], function(num) { return (num > 4); }) returns 1 (only matches 5)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit[0] === "a"; }) returns 1 (only matches apple)
- countWhich([10, 20, 30, 40, 50], function(num) { return num % 7 === 0; }) returns 0 (none of the numbers are divisible by 7)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit.length > 5; }) returns 2 ("apple" is shorter than 6 characters)
- countWhich([], function(x) { return x > 10 }) returns 0
- countWhich("This should fail", function(word) { return true; }) returns false (because the first argument is not an array)

*/

const countWhich = function(list, cb) {

  /* IMPLEMENT ME */
  //If the first argument is not an array, our function should return false instead of a number.
  if (!Array.isArray(list)) {
    return false;
  }

  //Intializing result to 0
  let result = 0;
  //loop through the list
  for (let i = 0; i < list.length; i++) {
    //calling the callback function cb on each element
    if (cb(list[i])) {
      //Increment if truthy
      result++;
    }

  }
  return result;
};

//challege 15
console.log("Challenge #15");


"use strict";

/* Question 03

Implement the function as defined below.

Many programming languages have a range() functionality which will generate an array of numbers that increment from either 0 or 1 up to the number of digits requested. For example, range(10) might return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] or it might return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] depending on the implementation. Some even allow you to control the direction.

Unfortunately, JavaScript doesn't have a built-in range() function, so we want you to build one. Build out the function range() so that it takes three parameters:

1. The number of integers to generate
2. A boolean for whether to skip 0 or not (true: skip zero)
3. A boolean for whether the range should be in reverse/decreasing order or regular/increasing order (true: reverse/decreasing order)

If a non-number is passed in for the first argument, return an empty array.

Pro Tip: Remember to work incrementally. Start off just implementing the false and false scenario for the second and third parameters. In other words, focus on the zero-based, ascending range first. Work on edge cases at the very end (such as passing in a string instead of a number, as shown in the final example below.)

**Examples:**

- range(10, false, false) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
- range(10, true, false) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- range(10, true, true) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
- range(10, false, true) should return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
- range(3, true, false) should return [1, 2, 3]
- range(0, false, <anything>) should return [0]
- range(10) should do the same thing as range(10, false, false)
- range(10, true) should do the same thing as range(10, true, false)
- range("2", <anything>, <anything>) should return []
*/
//Start off just implementing the false and false scenario for the second and third parameters.
const range = function(count, skipZero = false, descending = false) {

  /* IMPLEMENT ME */
  //If a non-number is passed in for the first argument, return an empty array.
  if (typeof count !== 'number') {
    return [];
  }
  const result = [];
  let rangeCount = count;

  if (skipZero) {
    rangeCount++;
  }
  // console.log(skipZero);
  // console.log(rangeCount);

  if (descending) {
    for (let i = rangeCount - 1; i >= skipZero ? -1 : 0; i--) {
      result.push(i);
    }
  } else {
    for (let i = skipZero ? 1 : 0; i < rangeCount; i++) {
      result.push(i);
    }
  }

  return result;

};

//challege 16
console.log("Challenge #16");
"use strict";

/* Question 04

Implement the function as defined below.

Given an array of values, the minmax() function will return an array that contains the minimum and maximum values in the array, always with minimum at index 0 and maximum at index 1. For the purposes of this question, you are not allowed to use Math.max() or Math.min().

The array can be a list of lower-cased strings instead of numbers. In this case, min is the string that would be sorted first alphabetically and max is the string that would be sorted last alphabetically ("a" < "b", while "ab" > "aa", and so on).

Mixed-type (strings and numbers) arrays are not of concern to us (meaning, do not worry about this situation).

Examples:

- minmax([1, 2, 3, 4, 5]) returns [1, 5]
- minmax([90, 89, 123, 3]) returns [3, 123]
- minmax(["apple", "banana", "canada"]) returns ["apple", "canada"]
- minmax([]) returns [undefined, undefined]

*/

const minmax = function(list) {
  //if the array is an empty array
  if (list.length === 0) {
    return [undefined, undefined];
  }
  //initialize
  let min = list[0];
  let max = list[0];
  //loop through the given array
  for (let i = 0; i < list.length; i++) {
    //current item in the array is defined as current
    const current = list[i];
    //conditionals to check min or max than the current
    if (current < min) {
      min = current;
    } else if (current > max) {
      max = current;

    }

  }
  //return only min, max
  return [min, max];
};

