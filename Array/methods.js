//Methods of Arrays

//push - add the element to the end of an array
let addElement = ['apple', 'banana','grapes'];
addElement.push('orange');
console.log(addElement);

//pop - removes the element to the end of an array
let deleteElement = ['a','c','s','r'];
deleteElement.pop();
console.log(deleteElement);

//unshift - add the element at the begining
 let begining = ['pen','pencil'];
 begining.unshift('Note');
 console.log(begining);

// shift - removes elements from the begining
let removes = ['name','email','pasword'];
removes.shift(0);
console.log(removes);

/*................................................................................*/

/* 
1.map(),
2.filter(),
3.find(),
*/

//map() - creates a transformed new array from the existing array
//task1 Create a new array where each price is increased by 10%

let prices = [100,200,300];

function increased(x){
    return x+x*0.10;
}
let result = prices.map(increased);
console.log(result);
 
//filter() - creates a new array which is satisfies the condition
//task1 Create a new array with only ages greater than or equal to 18
let ages = [12,18,25,14,30]
 
function ageCheck(x){
    return x>=18;
}
let adult = ages.filter(ageCheck);
console.log(adult);

//task2 Create a new array with only numbers less than 15.

let num = [5,10,15,20];

let minor = num.filter(function(x){
    return x<15
})
console.log(minor);

//find() - returns the first element that satisfies the condiditions
//task1 Find the first score greater than 50

let score = [30,45,60,80];

let results = score.filter(function(x){
    return x > 50;
})

let final = score.find(function(x){
    return x > 50;
})

console.log(final);

//task2 Find the first name that starts with "C"

let names = ["Arun","Balaji","Chitra","Arjun"];

let finals = names.find(function(name){
    return name.startsWith("C")
})
console.log(finals);

//task 3 Find the first word whose length is greater than 4

let words = ["hi","hello","welcome","bye"];

let wordCheck = words.find(function(word){
    return word.length>4
});
console.log(wordCheck);

//task4 Find the first city that ends with "i"

let cities = ["Chennai","Mumbai","Coimbatore","Kolkata"];

let cityCheck = cities.find(function(city){
    return city.endsWith("i")
})
console.log(cityCheck);

/*............................................................................*/
// final task for the array methods with map, filter, and find with the objects
//Final task student details
let employees = [
  { name: "Karthik", salary: 30000 },
  { name: "Meena", salary: 50000 },
  { name: "Suresh", salary: 25000 },
  { name: "Anitha", salary: 60000 }
];

//task1. to print the employee names alone 
let e_name = employees.map((ename)=> ename.name)
console.log(e_name);

//task2. to Get employees whose salary is greater than or equal to 40000
let e_salary = employees.filter((esalary)=> esalary.salary > 40000);
console.log(e_salary);

//task3. to Find the employee whose name is "Suresh"
let e_findname = employees.find((efname)=> efname.name==="Suresh");
console.log(e_findname);












