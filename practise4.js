let mode = document.querySelector("#mode")
let currentmode = "light";
let body = document.querySelector("body");

mode.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode = "black"
        body.classList.add("dark")
        body.classList.remove("light")



    }
    else{
        currentmode="light";
        body.classList.add("light")
        body.classList.add("dark")

    }
    console.log(currentmode)
})



