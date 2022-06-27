
// Calculate area of a rectangle

let length =   2;
let height = 4;


let area = (length * height) / 2;

console.log(`The area of the rectangle is: ${area}`);

// The Temperature Converter

let celsius = 50
let fahrenheit = 300



console.log(`${celsius}°C is ${celsius * 1.8 + 32}°F`);

console.log(`${fahrenheit}°F is ${Math.floor((fahrenheit - 32)/9*5) }°C`);


// For loop
// Numbers' summations

let Numbers = [23,54,32,87,47]
let sum = 0;

for (let i = 0; i < Numbers. length; i++) {
    
         sum += Numbers[i]; } 

console.log(sum);


// Maximum number

let numbers2= [16,4,2,0,19,6]

let max = 0;

for (let i = 0; i < numbers2. length; i++) {

    if (numbers2[i] > max){
        max = numbers2[i]; 

    }
    
        } 

console.log(max);


// Reverse Array

let numbers3 = [1,2,3,4,5,6,7,8,9,10]

for (var i = numbers3.length - 1; i >= 0; i--) {
    console.log(numbers3[i]);
}

// Nested for loop

// stars pattern

let num = 5;


let string = "";

for (let i = 1; i <= num; i++) {
 
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);








