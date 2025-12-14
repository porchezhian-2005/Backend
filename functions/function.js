// let n = 2;
// function square(sum){
//     let ans = sum * sum ;
//     return ans
// }
// let square1 = square(n);
// console.log(square1);
// let square2 = square(3);
// console.log(square2);

// /*...............................................................................*/ 

// let name ;

// function greetUser(name){
//     return `Hello ${name}`
// };

// let greetUSer1 = greetUser('Alax');
// let greetUser2 = greetUser('losheka');
// let greetUser3 = greetUser('KL Rahul');

// console.log(greetUser2);
// console.log(greetUSer1);
// console.log(greetUser3);

/*---------------------------------------------------------------------------------*/

// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();

// function add(){
//     let a = 8;

//     function sub(){
//         let b = 9;
//         console.log(b);
        
//     }
//     sub()
    
// }

/*.......................................................................................*/
// closure
// function createGreeting(name){
//     let result;
//     function inner(){
//         result = name
//         console.log(`Hello ${result}`);
       
//     }
//     return inner;
    
// }
// const wishe = createGreeting("lokesh");

// function createGreeting(name){
//     function inner(){
//         console.log(`Hello ${name}`);
//     }
//     return inner;
// }

// const wishes = createGreeting("lokesh");
// wishes();  
// wishes();  
// wishes(); 

// function createCounter(a){
//     function inner(){
//        a = a+1;
//         console.log(a);
        
//     }
//     return inner
// }
// let counter = createCounter(0);
// counter();
// counter();
// counter();























