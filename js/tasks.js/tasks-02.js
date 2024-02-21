 // Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
    return string.split(" ");
  }
  
  // DNA to RNA Conversion
  // https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
  
  function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U");
  }
  
  // Find Maximum and Minimum Values of a List
  // https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
  
  var min = function (list) {
    return Math.min(...list);
  };
  
  var max = function (list) {
    return Math.max(...list);
  };
  
  // Smallest value of an array
  // https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
  
  function min(arr, toReturn) {
    return toReturn === "index"
      ? arr.findIndex((x) => x === Math.min(...arr))
      : Math.min(...arr);
  }
  
  // Варіант з циклом, швидший, оскільки тільки один прохід по масиву, але більше коду :)
  
  function minOptimized(arr, toReturn) {
    let smallestValue = arr[0];
    let smallestValueIndex = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i];
        smallestValueIndex = i;
      }
    }
  
    return toReturn === "index" ? smallestValueIndex : smallestValue;
  }
 
  // Поглиблені задачі

// A wolf in sheep's clothing
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
    let wolfIndex = queue.reverse().findIndex((x) => x === "wolf");
    return wolfIndex === 0
      ? "Pls go away and stop eating my sheep"
      : `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
  }
  
  // Beginner - Lost Without a Map
  // https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
  
  function maps(x) {
    return x.map((element) => element * 2);
  }
  
  // Find the first non-consecutive number
  // https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
  
  function firstNonConsecutive(arr) {
    if (arr.length < 2) return null;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) return arr[i];
    }
    return null;
  }