// setTimeout(() => {
//   console.log("---====HEllO====---");
// }, 4000);


// !callback-
// console.log("====-----Callback-----====");

// function sum(a,b){
//     console.log(a+b);
    
// }
// function sub(a,b){
//     console.log(a-b);
    
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2,sum)


// function getData(dataID,getNextdata){
    // 2s timeout
//     setTimeout(()=>{
//         console.log("Data",dataID);
//         if(getNextdata){
//             getNextdata();
//         }
        
//     },2000);
// }
 // ! callback hell:- nested callback stacked below one another forming a pyramid structure
 // !                 this style of programming becomes difficult to understand & manage.
 // !              for solving this problem promises is used

// getData(1,()=>{
//     console.log("==Getting data 2------");
//     getData(2,()=>{
//         console.log("==Getting data 3------");
//         getData(3,()=>{
//             console.log("==Getting data 4------");
//             getData(4)
//         });
//     });
// });

// ! Promises

/**
 it is an object in js
 it is the solution of callback hell
 */

 let promise=new Promise((resolve,reject)=>{
    console.log("I'm a Promise");
    // reject("some error ocurred");
    
 })
