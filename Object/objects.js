//Objects

// let employee = {
//     name:"Kamalesh",
//     'tech stack':"Front end",
//      experience : 2 
// }
// employee.name = "Kamal"
// console.log(employee.name);

/*............................................................*/
// task1:

// let student = {
//     name : "A.Kumar",
//     age:20,
//     course:"BCA",
// }
// console.log(student.name);
// console.log(student.course);
//task2:

// let movie = {
//     title:"Jumanji",
//     hero:"Rock",
//     year:2023,
// };
// movie.year = 2025
// console.log(movie);

//task3.
// let laptop = {
//     brand : "Dell",
//     ram:"16GB",
//     price:55000,
// };
// console.log(laptop);

//task4.
// let book = {
//     title : "JavaScript Guide",
//     pages:200,
// }
// book.author = "John Doe";
// console.log(book);

// console.log(`${book.title} by ${book.author}`);
/*....................................................................................*/
//objects with this 

// let user = {
//     name : "Pranav",
//     email : "pranav@gmail.com",

//     showDetails(){
//         console.log(`Name is ${this.name}, Email is ${this.email}`);
        
//     }
// }
// user.showDetails() 

/*......................................................................................*/

// let obj = {
//   x : 8,
// };
// console.log(typeof(obj));
/*.....................................................................*/
//task2 with the deposit using & balance using this keyword
let account = { // account is a variable reference for a object to access or call
    balance:1000,//balance it is really consider as a object contains key & value pair
    deposit(amount){
        this.balance += amount;
        console.log(this.balance);
        
    }// this is consider as a method contains some action to be perform when the object.method called 
    
}
account.deposit(1000)// outside the method we calling the method 
