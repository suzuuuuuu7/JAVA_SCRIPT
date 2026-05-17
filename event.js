let btn1 = document.querySelector("#btn1")
btn1.addEventListener("click",()=>{
    console.log("1")
});
btn1.addEventListener("click",()=>{
    console.log("2")
});

   const handler3 = ()=>{
    console.log(3)
   }
   btn1.addEventListener("click",handler3);
btn1.addEventListener("click",()=>{
    console.log("4")
});
btn1.removeEventListener("click",handler3)


    
   

