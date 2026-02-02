console.log("==========Functions========");

function myFunction() {
  console.log("Ayankhan");
  console.log("I'm learning JS");
}
myFunction();
myFunction();

//Parameter functon
function function1(msg) {
  console.log(msg);
}
function1("I'm Ayan Khan");

// function ->numbers, sum

function sumFunction(num1, num2) {
  console.log(num1 + num2);
}
sumFunction(2, 4); // 6

// Return function

function sum(x, y) {
  //local Variable
  s = x + y;
  return s;
}
let val = sum(3, 4);
console.log(val); //7

// Arrow Function

const arrowMul = (a, b) => {
  console.log(a * b);
};
console.log(arrowMul);

const arrowSum = (a, b) => {
  console.log(a + b);
};
console.log(arrowSum);
console.log(arrowSum(4, 6));

// Practice Question 1

function stringFunction(string) {
  let count = 0;
  for (const char of string) {
    // console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }

  return count;
}
// stringFunction("Ayankhan");

// using arrow function

const practiceQuest = (str) => {
   let count = 0;
  for (const char of str) {
    // console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) 
      count++;
    
}
return count;

 } ;
  
//  practiceQuest("AdityaSingh")
 
// ! FoeEach Loops in array
/**
 * for each ka use tb krte jb hme array ke sbhi element ke kuch ka na kuch task perform krwana ho
 * jese array ke ssabhi element ko print krwaana ya sb ko uppercase ya lowercase me krna
 */
let arr=[1,2,3,4,5]

arr.forEach((val) => {
      console.log(val);
      
})

let arr1=["Ayan","Shahan","Zeeshan"]

arr1.forEach((string, idx, arr)=>{
  console.log(string, idx, arr);
  // console.log(string.toUpperCase() );
  
})

// ! Important question
 /**
  * for each is (higher order function/method )
  * hof is a method that either take another function as an parameter or they
  * return another function as an output 
  */

//!  Practice question

let arr3=[2,3,4,5,6,7]

arr3.forEach((sq)=>{
   let sqrt=sq*sq;
    console.log(sqrt);
    
})
    // console.log(arr3);



// ! Some more array methods

// ! map method
/**
 * map is similar to the foreach method only the difference is that map return new array 
 * creates a new array with the results of some operation .
 */
console.log("==========map Method======");

let num=[83,34,32,34,36,87]

let newarr=num.map((val)=>{
  return val*val;
})
console.log(newarr);
console.log(num); // the old array will remain same if we return output

// ! filter method
/**
 * is ka kaam hota h array ke ek ek index pe jakr uski value ko update krna based on the condition
 * jese man lo ek array h usme se hme sirf even number ko nikalna h 
 */
  

let arr4=[5,6,7,8,9,23,45,46,2,3,4,5,8];

let evennum=arr4.filter((val)=>{
   return val%2===0;
});
console.log("Even number is ",evennum);//[6, 8, 46, 2, 4, 8]

// ! Reduce method
// Performs some opeartion & reduces the array to a single value.
// it returns that single value

let arr6=[1,2,3,4,5]

let sumVal=arr6.reduce((res,curr)=>{
  return res*curr;
});

console.log(sumVal);

// For greatest method

let greatestNum=arr6.reduce((prev,curr)=>{
  return prev>curr?prev:curr;
})
console.log(greatestNum);


// ! Practice Questions  :- We are given array of marks of student .Filter out of the marks of student that scored 90+.


let marks=[67,48,93,83,95,96,40,90];

let greatestScore=marks.filter((val)=>{
  return val>90;
});

console.log(greatestScore); //[93, 95, 96]

// ! Practice question :-
/**
 * Take a number n as an input from user.
 * create an array of number from 1 to n
 * use the reduce method to calculate sum of all number in the array.
 * use the reduce method to calculate product of all number in the array
 */

let n=prompt("Enter Any Number From 1 To 10");

let arrNum=[]

for(i=1; i<=n; i++){
  arrNum[i-1]=i;
}
console.log(arrNum);

let sumOfNum=arrNum.reduce((prev,curr)=>{
  return prev+curr;
});
console.log(sumOfNum);


// it is Also can be calculation of factorial.
          
let productOfNum=arrNum.reduce((prev,curr)=>{
  return prev*curr;
});

console.log(productOfNum);

