console.log("===========DOM============="); 
// window.alert("HEllO")

console.log(document);  // it will print html code

console.dir(document); // ye properties ko print krega document ki

console.log(document.body); // it will return body of html

console.dir(document.body); // properties of body

// ! DOM Manipulation
console.log("=============DOM Manipulation===========");

/**
 * 1. selecting by id 
 *    for ex:- document.getElementById("MyID")
 * 2. selecting by class name
 *    for ex:- document.getElementByClassName("Myclass")
 * 3. selecting by tag
 *    for ex:- document.getElementByTagNAme("Tag")
 */

// selecting by id
console.log("====Accessing By Id====");

let domid=document.getElementById("dom")
console.log(dom);  // it will return an html code
console.dir(dom); // it will return properties 

// selecting by class
console.log("====Accessing By class====");

let domclass=document.getElementsByClassName("design")
// console.log(domclass);
console.dir(domclass);

// Accesing by tagName
console.log("====Accessing By TagName====");

let domTagName=document.getElementsByTagName("p")
console.dir(domTagName);


// ! Querry Selector :- querry selector can be select id,class,or tag 
// !                   it is a way of accesing element
console.log("=========Querry Selector==========");

let element=document.querySelector("h1"); // ye hme h1 la first ka element provide karega 
console.dir(element);
  
// agr usse matching sare element chahiye to (querry selector all ka use krenge)

let elementAll=document.querySelectorAll("h1");
console.dir(elementAll);


// ! Properties
/**
 * These properties is used to access the element or to change the value of that element
 * 
 * tagName:- returns tag for element nodes
 * innerText:- returns the texts content of the element and all it's children
 *     innerText me sirf text return hota h
 * innerHTML:- returns the plain text or html ccontent in tthe element
 *          innerHTML me tag ke sath content return hota h
 * textContent:- returns textual content even for hidden element
 */

let heading =document.querySelector("h3")
// console.log(heading);

