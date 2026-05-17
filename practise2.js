let dev = document.getElementsByClassName("box")
for(let i=0;i<dev.length;i++){
    let p = document.createElement("p")
    p.textContent = "this is mine"
    let btn = document.createElement("button")
    btn.textContent="submit"
    btn.style.backgroundColor="red"
    dev[i].appendChild(p)
    dev[i].appendChild(btn);
    
}
let btn1 = document.createElement("button")
btn1.textContent = "submit"
btn1.style.backgroundColor = "green"

let div  = document.getElementsByClassName("box")
for (let i = 0;i<3;i++){
    let child = div[i].firstElementChild
    div[i].removeChild(child)
}