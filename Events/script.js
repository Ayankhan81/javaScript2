console.log("=======Events in JavaScript=======");

let btn1 = document.querySelector("#click");
btn1.onclick = () => {
  console.log("This Button 1");
};

// 2nd Method

// isse phle wala method dobara call krne pr override ho jata h is liye hm ye method use krte hn

btn1.addEventListener("click", (evt) => {
  console.log("This is event listener handler--1");
  // event ka object agr print karana ho tab
//   console.log(evt);

//   console.log("Event type is =", evt.type);
});

btn1.addEventListener("click", () => {
  console.log("This is event listener handler--2");
});

const handler3=()=>{
     console.log("This is event listener handler--3");
}

btn1.addEventListener("click",handler3 );

btn1.addEventListener("click", () => {
  console.log("This is event listener handler--4");
});


// removing Process


btn1.removeEventListener("click",handler3)

// Practice question -1
/*
Create a toggle button that changes the screen to dark mode when clicked & light mode when click again
*/

let modeBtn=document.querySelector("#mode");

let currMode="light" ; 

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="Dark";
        console.log("You are in Dark Mode");
        document.querySelector("body").style.backgroundColor="black"
    }
    else{
        currMode="light"
        console.log("You are in Light Mode");
        document.querySelector("body").style.backgroundColor="white"

        
    }
    console.log(currMode);
    
})