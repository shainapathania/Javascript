//string basic
/*
const name="shaina"
const age = 26
console.log("Hello my name is "+ name + " and i am "+ age +" years old");
console.log(`Hello my name is ${name} and i am ${age} years old`);
*/
const str = new String('shaina');
// console.log(str[0]);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.charAt(4));
// console.log(str.indexOf("a"));

const newStr= str;
//console.log(newStr.substring(0,3));

let strn=str.slice(-6,2);
//console.log(strn);

let hello = "   hello world   ";
//console.log(hello);
///console.log(hello.trim());  //to remove whitespaces and line terminators
let url="http/google/shaina-pathania";
console.log(url.replace("-","_"));

console.log(url.includes("facebook"));
console.log(url.split('/'));