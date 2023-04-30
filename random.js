//main

const sayHelloTo = require('./myModule');

// Just to check the value of what we just required here
console.log('sayHelloTo: ', sayHelloTo);

sayHelloTo('Bernie');

//moduleChecker

console.log(module);


//myModule
const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
};
// add this line to the end of the file.
module.exports = sayHelloTo;

//map of lotide
//inserting assertArraysEqual  and eqArrays
function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal, the arrays are equal
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Implementation of map and call backs
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    //pushing 0th index of callback to the results
    results.push(callback(item));
  }
  return results;
};
//a simple test by adding the following code below the map function definition:
const results1 = map(words, (word) => word[0]);


// Test cases
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["red", "blue", "pink", "black"];


assertArraysEqual(map(words1, (word) => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words2, (word) => word.length), [5, 6, 6, 4]);
assertArraysEqual(map(words2, (word) => word.length), [3, 4, 4, 5]);

module.exports = map;

//without
// FUNCTION IMPLEMENTATION
function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal, the arrays are equal
  return true;
}
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const without = function(sourceArray, itemsToRemoveArray) {
  // Create an empty array to hold the items that will remain in the source array
  const filteredArray = [];
  // Iterate over each item in the source array
  for (let item of sourceArray) {
    // If the item is not in the items to remove array, add it to the filtered array
    if (!itemsToRemoveArray.includes(item)) {
      filteredArray.push(item);
    }
  }
  // Return the filtered array
  return filteredArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// => should PASS
assertArraysEqual(without([], []), []);
// => should PASS
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// => should PASS
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]);
// => should PASS
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
// => should PASS


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;


//taken until
//inserting assertArraysEqual  and eqArrays
function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // If all elements are equal, the arrays are equal
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const takenUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
      // for truthy value, current item is returned with the prev iteration result
    }
    result.push(item);
    //for a falsy value, add item to the end of the result
  }
  return result;
};
// Test Case 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takenUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

// Test Case 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takenUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takenUntil;

//letterPosition
// FUNCTION IMPLEMENTATION
function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal, the arrays are equal
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

function letterPositions(sentence) {
  const results = {};
  //logic
  for (let i = 0; i < sentence.length; i++) {
    //condional statement to count letters
    if (sentence[i] !== ' ') {
      //if the current character is not a space or empty:
      if (results[sentence[i]]) {
        // if the counts object already has an entry for this character:
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
        //else: set the count of the current character to 1
      }
    }
  }
  return results;
}
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;

//flatten
// FUNCTION IMPLEMENTATION
function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal, the arrays are equal
  return true;
}
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const flatten = function(arr) {
  let flatArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let subElement of element) {
        flatArr.push(subElement);
      }
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// should pass
assertArraysEqual(flatten([1, [2, [3, [4]]]]), [1, 2, [3, [4]]]);
// should fail

module.exports = flatten;

//eqObjects
// FUNCTION IMPLEMENTATION
function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal, the arrays are equal
  return true;
}
const assertEqual = function(actual, expected) {
  if (actual != expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
eqObjects(shirtObject, anotherShirtObject);
// => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
eqObjects(shirtObject, longSleeveShirtObject);
// => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

module.exports = eqObjects;

//asserObjectEqual
//eqObjects 
function eqArrays(arr1, arr2) {
  // If the arrays have different lengths, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal, the arrays are equal
  return true;
}
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  //this line to import the library so that the function can use it
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};
const object1 = { a: 1, b: 2 };
const object2 = { b: 2, a: 1 };
const object3 = { a: 1, b: 3 };

assertObjectsEqual(object1, object2);
// should pass
assertObjectsEqual(object1, object3);
// should fail

module.exports = assertObjectsEqual;

//assertArrayEqual
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]);
// should log "✅✅✅ Assertion Passed: [1,2,3] === [1,2,3]"
assertArraysEqual([1, 2, 3], [3, 2, 1]);
// should log "🛑🛑🛑 Assertion Failed: [1,2,3] !== [3,2,1]"
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// should log "🛑🛑🛑 Assertion Failed: [1,2,3] !== [3,2,1]"

//new promise
new Promise(function(resolve, reject) {
  const value = doSomething();
  if (thingWorked) {
    resolve(value);
  } else if (somethingWentWrong) {
    reject();
  }
})
  .then(function(value) {
    //success
    return nextThing(value);
  })
  .catch(rejectFunction);

new Promise(function(resolve, reject) {
  let img = document.createElement('img');
  img.src = src;
  img.onload = resolve;
  img.onerror = reject;
  document.body.appendChild(img);
})
  .then(finishLoading)
  .catch(showAlternateImage);