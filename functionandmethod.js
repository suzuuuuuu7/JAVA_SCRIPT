// Function
// function add(n){
//     if(n==0)
//         return 0
//     return n + add(n-1);
// }
// add(4);
function count_vowels(msg){
      let count =0;
    for (const char of msg){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"||char ==="u"){
            count = count+1
                
        }
}
console.log(count)
}
count_vowels("sujalaeiou")

const result = (str)=>{
          let count =0;
    for (const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"||char ==="u"){
            count = count+1
                
        }
}

console.log(count)
}
result("sujal")
//  array Method
// for Each = it returs old array after calculation
let arr = ["sujal kc","samikshay thakuri","kanxa"]
arr.forEach(function myfunction(value,idx,arr){
    console.log(value.toUpperCase(),idx,arr)
})
let data = [3,4,4,5];
data.forEach((value)=>{  // using arrow function 
    console.log(value)
})

let num = [2,3,4]
num.forEach(function mynum(value){
 console.log(value*value)
})
const output =(value)=>{
    console.log(value*value)
}
num.forEach(output)

// map method  = it creates new array after calculation

let oldarray = [1,2,5]
let newarray=oldarray.map(function mul(value){
    return value*2
})
   
console.log(newarray)
// filter method
let attri = [1,2,3,5,8]
let evenArray = attri.filter(function myfunction(value){
    return value>=2
});
console.log(evenArray)
// Reduce  = if we want single value

// const outcome=arr.reduce(function myfunction(result,current_value){
//     return result+current_value;
// })
// console.log(outcome)


let arr1= [10,2,4,6,20]; 
const outcome =arr1.reduce((previous,current_value)=>{
     return previous>current_value?previous:current_value;   // to find largest number in array
 });
 console.log(outcome)
 
// 1
 let marks = [99,29,20,90,99,100,39,50,98,97]
let output1 = marks.filter(function myfunction(value){
    return value>90;
})
console.log(output1)
console.log(marks)
//2
let arr2 = []
let n = prompt("enter number")
console.log(n)
for(let i=1;i<=n;i++){
    arr2[i-1]=i;
  
}
console.log(arr2)
const outcome2=arr2.reduce((result,value)=>{
return result+value
})
console.log(outcome2)
console.log(arr2)
const outcome3=arr2.reduce((result,value)=>{
return result*value
})
console.log(outcome3)