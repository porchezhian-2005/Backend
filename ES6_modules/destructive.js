// Destructive refers to unpacking the values from array or objects into variables in one line
// unpacking refers taking a values from out of an array and storing them in variable by position

//unpacking values
let numbers = [10, 20, 30];

let [a,b,c] = numbers;

console.log(a,b,c);

// Skip the values unwanted the values
let arr = [1,2,3];

let [x, , z] = arr;

console.log(x,z);

// default values
let num = [1,2,];

let [e =11,l=22,] = num 

console.log(e,l);
// task1. first need to extract red and green value in the array and extract red and blue in the given array
let colors = ['red','blue','green'];
let [m , ,n] = colors
console.log(m,n);

let [o,p, ] = colors
console.log(o,p);

//task2. set default values

let row = [50];

let [scores = 90] = row;
console.log(scores);

// task3. extract the first and last value from the array using destructive
let values = [1,2,3,4];

let  [f, , , g] = values;
console.log(f,g);






