// Challenge 1: Sum of Positives
function sumOfPositives( numbers){
    let sum = 0;
    for (i= 0; i < numbers.length; i++) {
        if (numbers[i] > 0) 
        {
            sum += numbers[i];
        }
    }
    return sum;
}
// Test case
console.log(sumOfPositives([6, -13, -1, -14, 2, 7]));

//Challenge 2: Find Maximum Value

function findMax(array){
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
// Test case
console.log(findMax([1, 2, 3, 4, 5])); 

// Challenge 3: Election Winner
function findWinner(candidates){
    let winner=candidates[0];
    for (let i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    } 
    return winner;
} 
 const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
 ];
 findWinner(candidates); 

 //Test case    
console.log(findWinner(candidates)); 

//Challenge 4: Longest word
function findLongestWord(words) {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
// Test case
console.log (findLongestWord(["apple", "banana", "cherry", "watermelon"]));

//Challenge 5: Count Properties
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}
// Test case
const person = {
    name: "Faiza",
    age: 29,
    city: "Garissa",
    occupation: "Software Engineer"
    Hobby: "Sleeping"
};
console.log(countProperties(person));

//Challenge 6: Filter by Length
function filterByLength(arr, minLength){
  return arr.filter(i => i.length >= minLength);
}

//Test case
console.log(filterByLength(["apple", "banana", "cherry", "watermelon"], 6)); // ["banana", "cherry", "watermelon"]

//Challenge 7: Sum of Even Numbers
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//Test case
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12

//Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    return Math.abs(evenSum - oddSum);
}
//Test case
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])); // 0

//Challenge 9: Count Truthy
function countTruthy(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key]) {
            count++;
        }
    }
    return count;
}
//Test case
const data = {
    a: true,
    b: false,
    c: 1,
    d: 0,
    e: "hello",
    f: null
};//output: 3

//Challenge 10: Average of Numbers
function average(arr) {
    if (arr.length === 0)
         return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
//Test case
console.log(average([1, 2, 3, 4, 5])); // 3
console.log(average([])); // 0   


//Challenge 11: linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}   
//Test case
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1

//Challenge 12: Reverse linear Search
function reverseLinearSearch(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
//Test case
console.log(reverseLinearSearch([1, 2, 3, 4, 5], 3)); // 2

//Challenge 13: Linear search all indices
function linearSearchAll(arr, target) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}   
//Test case
console.log(linearSearchAll([1, 2, 3, 4, 5, 3], 3)); // [2, 5]
console.log(linearSearchAll([1, 2, 3, 4, 5], 6)); // []

//Challenge 14: Count Occurrences
function countOccurrences(arr) {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        counts[str] = (counts[str] || 0) + 1;
    }
    return counts;
}
//Test case
console.log(countOccurrences(["apple", "banana", "apple", "cherry", "banana", "apple"])); // { apple: 3, banana: 2, cherry: 1 }
//Challenge 15: Remove Duplicates
function removeDuplicates(arr) {
    const seen = new Set();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            result.push(arr[i]);
        }
    }
    return result;
}
// Test case
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // [1, 2, 3, 4, 5]

//Challenge 16: Most Frequent
function mostFrequent(arr) {
    const counts = {};
    let maxCount = 0;
    let result = null;
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        counts[val] = (counts[val] || 0) + 1;
        if (counts[val] > maxCount) {
            maxCount = counts[val];
            result = val;
        }
    }
    return result;
}
// Test case
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 5])); // 3
