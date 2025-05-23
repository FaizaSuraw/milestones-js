const e = require("express");

//Challenge 1: Sum of two numbers
function addition(a, b) {
  return a + b;
}
//Test case
console.log(addition(2, 3));

//Challenge 2: Convert Minutes into Seconds
function convert(minutes) {
  return minutes * 60;
}
//Test case
console.log(convert(5));

//Challenge 3: Perimeter of a rectangle
function findPerimeter(length, width) {
  return 2 * (length + width);
}
//Test case
console.log(findPerimeter(6, 7));

//Challenge 4:Check Negative
function isNegative(number) {
  return number < 0;
}
//Test case
console.log(isNegative(-5));

//Challenge 5: Can I drive
function candDrive(name, age) {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive`;
  }
}
//Test case
console.log(candDrive("Faiza", 20));

//Challenge 6: Largest Number
function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
//Test case
console.log(findLargest(5, 10, 3));

//Challenge 7: BMI Calculator
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  return `Your BMI is ${bmi.toFixed(1)} - ${category}.`;
}
console.log(calculateBMI(70, 1.75));

//Challenge 8:Greetings Based on Time
function greetUser(name, hour) {
  if (hour < 12) {
    return `Good morning, ${name}!`;
  } else if (hour >= 12) {
    return `Good afternoon, ${name}!`;
  } else if (hour >= 18) {
    return `Good evening, ${name}!`;
  } else {
    return `Good night, ${name}!`;
  }
}
//Test case
console.log(greetUser("Alice", 10)); //

//Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number.toString());
    // If the number is not divisible by 3 or 5, print the number itself
  }
}
//Test case
fizzBuzzCheck(15);

//Challenge 10: Perimeter 2
function perimeter(letter, num) {
  if (letter === "s") {
    return 4 * num;
  } else if (letter === "c") {
    return 6.28 * num;
  } else {
    return "Invalid shape";
  }
}
//Test case
console.log(perimeter("s", 8));
console.log(perimeter("c", 16));

//Challenge 11: Sum of Even Numbers
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
//Test case
console.log(sumEvenNumbers(10));

//Challenge 12: Multiply by itself
function powerUp(num, times = 0) {
  if (times === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 0; i < times; i++) {
    result *= num;
  }
  return result;
}

//Test case
console.log(powerUp(2, 3)); // 8
console.log(powerUp(5, 0)); // 1
console.log(powerUp(3, 2)); // 9

//Challenge 13: Factorial Calculator
function factorial(n) {
  if (n < 0) {
    return "Invalid input";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
//Test case
console.log(factorial(5));

//Challenge 14: Multiple sum
function sumMultiples(n, divisor) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }
  return sum;
}
//Test case
console.log(sumMultiples(10, 2));

//Challenge 15: Sum of Digits
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
//Test case
console.log(sumDigits(12345)); // 15
