let marks = [30,80,37,30,"sujal"]
// let detail = ["sujal kc",30,500]
// console.log(marks)
// console.log(marks[0]);
// console.log(typeof(marks))
let sum = 0;
for(let mark of marks){
    sum = sum+mark; 
    
}
let values = [4,20,400,399,399]
for(let i = 0; i<=5; i++){
    let off = values[i]*0.1;
    values[i]=values[i]-off;
}
console.log(values);
values.push(4);
console.log(values)
values.pop(4)
console.log(values)
console.log(marks.concat(values))
 let companies = ["Bloomberg","Microsoft","Uber","Gogle","IBM","Netflix"];
 console.log(companies)
 companies.shift();
 console.log(companies);
 companies.splice(1,1,"ola");
 console.log(companies)
companies.push("Amazon");
console.log(companies)