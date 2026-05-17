let value = document.querySelector("h2");
console.dir(value.innerText)
value.innerText = value.innerText + "from apana college student"

 value.innerText = value.innerText.toUpperCase();
 let div = document.querySelectorAll(".box");
 console.dir(div)
 console.log(div[0])
 console.log(div[1])
 console.log(div[2])
 div[0].innerText="class"
  div[1].innerText="class"
   div[2].innerText="class"
   for(let i =0;i<=2;i++){
    div[i].innerText="classes"
   }
let idx = 1;
for(divs of div){
   divs.innerText = `new value assingn ${idx}`
   idx++;

}
console.log(divs)