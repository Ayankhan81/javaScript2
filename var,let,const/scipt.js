console.log("=======I'm leaerning javascript========");
// fullName="Ayan khan";
// console.log(fullName);
// age =24;
// price=99.99;
// console.log(age);
// console.log(price);
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// isFollow= false; 
// console.log(isFollow);
// fullName="JavaScript"
// console.log(fullName);

//! let,var,const

let Name="Ayankhan"
let Age=21;
let Study="btech"

console.log(Name);
console.log(Age)
console.log(Study);

const PI=3.14;
console.log(PI);

let x;
console.log(x); // undefined

//! Data types in JS

// primitive data types

// 1. String
fullName="Ayan khan";
console.log(fullName);

// 2. Number
age =24;
console.log(age);

// 3. Boolean 
isFollow= false; 
console.log(isFollow);

//4. undefined
let a;
console.log(a); 

//5. Null
x=null;
console.log(x);

//6. BigInt 
z=24943n
console.log(z);
console.log(typeof(z));

//7. Symbol

//! Object 
const student = {
    name : "ayan",
    age : 21,
    cgpa : 7.9,
    isPass : true,
};
console.log(student);
console.log(typeof(student));

// accessing the single object from collection
console.log(student.age);
console.log(student["name"]);

// if we want to increase the value of object

student["age"] =student["age"]+2;
console.log(student["age"]);

student["name"]= "ayan khan";
console.log(student["name"]);


//! Example 1

const Product = {
        productName : "Ball Pen",
        productRating : 7002,
        productPrice : 270,
        productDiscount : "5%",
}; 
console.log(Product);

//! Example 2

const profile = {
      userName : "Khanayan_81",
      followers : 400,
      following : 240,
      posts : 0 ,
      isFollow : true,
};
console.log(profile);
console.log(typeof(profile));
console.log(typeof profile["userName"]);
console.log(typeof profile["isFollow"]);
console.log(typeof profile["posts"]);

console.log(profile.followers);
console.log(profile.userName);





