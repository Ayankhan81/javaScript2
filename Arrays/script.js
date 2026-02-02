console.log("=======Arrays in JavaScript========") ;

let marks=[10,20,30,40,50];

let names=["Ayan","Aryan","Aditya","Aun"]

console.log(marks);
console.log(names);
console.log("The length of Array is :",marks.length);
console.log(typeof(marks));
console.log(names[0]);
console.log(names[5]);//undefined
console.log(names[2]='Khan'); //it replace the value of that index
console.log(names);

//! String are immutable wheather array are mutable thats means the value of string can't be change but value of arrays can be change

//! Looping over array

let heros=["ironman","spiderman","hulk","thor","captain","antman"]

// for(let idx=0;idx<heros.length;idx++){
//     console.log(heros[idx]);
    
// }
console.log("========for-of loop=========");

// for-of
for(let hero of heros){
    console.log(hero.toUpperCase());
    
}
console.log("=========Practice Question 1=========");

let studMarks=[85,97,44,37,76,60];
         console.log(studMarks);

let sum=0;
let avrg=0;
for(let val of studMarks){
    sum+=val
}
// for(let idx=0;idx<studMarks.length;idx++){
//          sum=sum+studMarks[idx];
// }
avrg=sum/studMarks.length;

console.log(`The Sum of Student Marks is :${sum} \nThe Average of Marks is :${avrg}`);


// console.log("The Sum of Student Marks is :",sum);
// console.log("The Average of Marks is :",avrg);

console.log("========Practice question 2=========");

let items=[250,645,300,900,50];
console.log("Price Before Offer applied",items);

// let off=0;
let disc=0;
for(let i=0;i<items.length;i++){
    disc=(items[i])/10;
    items[i]-=disc;
    // console.log(`Item Price before discount =${items[i]} \nItem Price After Applying offer ${items}`);
    
}
console.log("New Price After Offer ",items);


// ! Arrays Method
console.log("=========Array Method==========");

/*
1. Push() : add to end in existing array
2. Pop() : delete from end and return
3. 
*/
let fruits=["Apple","Banana","Orange","Grapes"]
console.log("The list of fruits is :",fruits);

        console.log("======push() Method======");

console.log("Add New fruit :",fruits.push("litchi"));
console.log(fruits);
fruits.push("guava","pineapple","pomegranates");
console.log(fruits);

        console.log("======pop() Method======");

console.log(fruits);
let deletedItem1=fruits.pop();
let deletedItem2=fruits.pop();

console.log(fruits);
console.log("deleted Item 1 is :",deletedItem1);
console.log("deleted Item 2 is :",deletedItem2);

console.log(fruits);

        console.log("======toString() method======");

let itemsName=["Ayan","Khan","Mohd"]
console.log(itemsName);
console.log(itemsName.toString());
let num=[1,2,3,4,5]
console.log(num);
console.log(num.toString());
  
        console.log("=====Concatination method=========");

let marvel_heros=["Thor","Spiderman","Thanos","Wanda"]
let dc_heros=["Superman","batman"]
console.log(marvel_heros);
console.log(dc_heros);


let finalArray=marvel_heros.concat(dc_heros);
console.log(finalArray);

console.log("========unshift Method=====");
// Add the value in starting of the array

let marvel=["thor","spiderman"]
console.log(marvel);
marvel.unshift("Antman")
console.log(marvel);

console.log("========shift Method=====");
// delete the value from starting of the array

let deletedValue=marvel.shift();
console.log(marvel);

console.log("========Slice Method======");
// This method doesnot in original array

let marvelHeros=["Thor","Spiderman","Hulk","Dr.Strange","Antman"]
console.log(marvelHeros);
console.log(marvelHeros.slice(1,4));

console.log("========Splice Method======");
// change original array(add,remove,replace)
 

// Practice Question 

let companies=["Bloomberg","Mocrosoft","Uber","Google","IBM","Netflix"]
console.log(companies);
// Add Amazon at the End of the array
        // companies.push("Amazon")
        // console.log(companies);

// Remove the First company from Array
        // companies.shift();
        // console.log(companies);


// Remove Uber & Add Ola in its place
companies.splice(2,1,"Ola");
console.log(companies);







       


        












