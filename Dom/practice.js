console.log("=======Practice Question 1=========");
let h2=document.querySelector("h2")
h2.innerText+=" From Apna College"
console.dir( h2.innerText)

// practice question

let divs=document.querySelectorAll(".box")
console.log(divs[0]);
divs[0].innerText="New Unique Value  1"
divs[1].innerText="New Unique Value  2"
divs[2].innerText="New Unique Value  3"

// we can use loops also for performing this task
// we will prefer always loops bcoz it will easy to handle so many divs

let idx=1;
for(div of divs){
   div.innerText=`This is unique Value of Divs ${idx}`
   idx++;
    
} 

console.log("=========Practice Question==========");

/*create a new button element give it a text "click me " background color of red & text color of white.
insert the button as the first element inside the body tag */

let newButton=document.createElement("button")
newButton.innerText="ClickMe";
console.log(newButton);

document.querySelector("body").prepend(newButton);
newButton.style.backgroundColor="red"
newButton.style.color="white"


console.log("======Practice question 2");

/*

*/

let newpara=document.querySelector("p")
console.log(newpara.getAttribute("class"));
// console.log(newpara.setAttribute("class", "newClass")); it will overwrite the attribute and change the previous used property
 
newpara.classList.add("newClass");


