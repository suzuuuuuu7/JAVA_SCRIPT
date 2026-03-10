//Arithematic operation
let a = 19;
let b= 9;
console.log("sum",a+b);
console.log("product",a*b);
console.log("subtract",a-b);
console.log("division",a/b);
console.log("Module",a%b);
console.log("Exponential",a**b);
// Uinary Operation
console.log("iNcrement",a--);
console.log("decrement",b--);
let c = 2;
let d = 8;
console.log("c",++c);// pri-increment
console.log("d",d++);// post-increment
console.log("d++",d)
//assignment operator
a += 5;
b *= 2;
c**=5;
console.log(a)
console.log(b)
console.log(c);
//comparison operator
console.log(a==b)
let x = 8;
let y = "3";
let z = 3;
console.log(x>=y)
console.log(y==z)// it checks only data
console.log(y===z)// it checks data type
// logical operator
console.log(x>3&&y==3)
console.log(x<5||x>y)
console.log(z!=y);
// conditional statements
let color ;
let mode="white";
if(mode=="dark_mode"){
    color="white"
}
else{
    color= "black"
}
let age = 20;
if(age>=20){
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}
let num = 4;
if(num%2==0){
    console.log("Even number")
}
else{
    console.log("odd number")
}
let _age = 30
if(_age<=20){
    console.log("Junior")
}
else if(_age>60){
    console.log("senior")
}
else{
    console.log("middle")
}
// ternary operator
let result = age>18?"adult":"not adult";
console.log(result)
// switch and break statement
let fruit = "banana";
switch(fruit){
    case "papaya":
    console.log("cost of papaya is 200");
    break;
    case "mango":
        console.log("the price of mango is 300")
        break;

    case "banana":
        console.log("price of papaya is 300")
        break
    default:
        console.log("sorry we are unable to found",fruit);
}
let value = prompt("enter any number")
if(value%5==0){
    console.log("Multiple of 5")
}
else{
    console.log("not")
}

let marks = prompt("Enter mark of student")
if(marks<=100&&marks>=80){
    console.log("A")
}
else if(marks<=89&&marks>=79){
    console.log("B")
}
else if(marks<=69&&marks>=60){
    console.log("C")
}
else if(marks<=59&&marks>=50){
    console.log("D")
}
else{
    console.log("F")
}