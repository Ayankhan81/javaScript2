//! Operators in Javascript

// Arithmetic operator
let a=2;
let b=3;
let c=a+b;
console.log(c);
console.log("a + b =",a+b);
console.log("a + b =",a-b);
console.log("a + b =",a*b);
console.log("a + b =",a/b);

// Logical Operator
//! Logical AND
let x=10;
let y=20;

let cond1=x>2;// true
let cond2=x>y;//true

console.log("cond1 & cond2 =",cond1 && cond2);

//! Logical OR
let p=10;
let q=20;

let cond3=p>2;// true
let cond4=q>y;//false

console.log("cond3 & cond4 =",cond3 || cond4);

//! conditional statement
console.log("=============Conditional Statement=========");

let mode= "dark";
let color;

if(mode ==="dark"){
    color="black";
}
else if(mode==="blue"){
    color="blue"
}
else if(mode==="pink"){
    color="pink"
}
else{
    color="white"
}
console.log(color);

//! Ternary operator
// ternary operator nothing but an method of writing the if else statement

//  condition? true output: false output
//  for ex:- age > 18 ? "adult" : "not adult";

console.log("=========Ternary operator========");

let age =16;

age>=18?
console.log("adult"):
console.log("not adult");


/* Practice Question:- get user to input a number using prompt("enter a number").
check if the number is a multiple of 5 or not*/

console.log("=========Practice question 1========");

// let num=prompt("Enter a Number");

                // Method 1

// if(num%5===0){
//     console.log(num,"Number is a multiple of 5");
// }
// else{
//     console.log(num,"Number is not a multiple of 5");
    
// }
                // Method 2
// num%5===0? 
// console.log("Number is a multiple of 5"):
// console.log("Number is not a multiple of 5");

console.log("=========Practice question 2========");

let score=prompt("Enter Score (0-100)");
if(score<0){
    console.log("Score is not Valid"); 
}
else if(score<=49){
    console.log("Student is Failed"); 
}
else if(score<=59){
    console.log("Student got D Grade");
}
else if(score<=69){
    console.log("Student got C Grade");
}
else if (score<=89){
    console.log("Student got B Grade");
}
else if(score<=100){
    console.log("Student got A Grade ");
}
else{
    console.log("Enter a valid Score");
    
}