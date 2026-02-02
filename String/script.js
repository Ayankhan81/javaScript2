console.log("======Strings in Java Script=====");
let Str1="Ayankhan";
let Str2='Khan';
console.log(Str1);
// length
console.log(Str1.length);
console.log(Str1[1],Str1[3],Str1[6]);//y n a

//! Template Literals

let specialString=`this is the template literals`
console.log(specialString);
console.log(typeof(specialString));

let object={
    Name:"Pen",
    cost:10,
};
// console.log("The cost of ",object.Name," is ",object.cost, "Rupees");

let output=`The cost of ${object.Name} is ${object.cost} Rupees`;
console.log(output);


/*String Interpolation :-
to create String by doing substitution of placeholder*/
// \n,\t these are escape character used for next line or space

//! String Method
/* These are in-built function to manipilate a string
1. str.toUpperCase()
2. str.toLowercase()
3. str.trim() it removes whitespace from start and end
4. str.slice(start,end?) it returns part of string
5. str1.concat(str2) it joins two string
6. str.replace(searchVal,newVal) it is used for relacing the value with new value
7. str.charAt(index) 

Note:- In js String are immutable 
original string does not change ever when we have some change in string it
create a new string 
*/

// uppercase
let string="ayankhan"
console.log(string.toUpperCase());
// lowercase
let string2="AYANKHAN"
console.log(string.toLowerCase());
// trim
let string3="      ayan  khan    "
console.log(string3.trim());
// slice
let string4="AyanKhan"
console.log(string.slice(1, 5));
// concat
let string5="ayan"
let string6="khan"
let res=string6.concat(string5);
/* conactination also can be by using +
  like :- let res=string5+string4*/
console.log(res);
// replace
// isme phle baar jo match ho jayega wahi replace hoga uske baad ka nhi replace hoga wo as it is print ho jayega
let strx="nyan Khan"
console.log(strx.replace("n" ,"A"));

let stry="Ayan khhcsbn"
console.log(stry.replace("hcsb","a"));

// replaceAll
//  isme ek replaceall bhi hota jisse pure string me change ho jayega
let strz="sysn khsn"
console.log(strz.replaceAll("s","a"));

// charAt
// ye charactor ki position batata h index ke accoding
let a="Ayankhan"
console.log(a.charAt(3));

//! Practice question

let userInput=prompt("Enter Your Name without space:")
let nameLength=userInput.length;
let userName="@"+userInput+nameLength;
// let userName=`@${userInput}${nameLength}`;
console.log("Your UserName is ",userName);
