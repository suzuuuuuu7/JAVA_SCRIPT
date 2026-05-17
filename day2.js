let dev = document.querySelector("div")
dev.style.backgroundColor = "red"
dev.style.fontSize= "30px"
dev.innerText="Hello world"
let newbtn = document.createElement("button");
newbtn.innerText="Click me"
newbtn.className="button"
newbtn.style.backgroundColor="purple";
newbtn.style.display="flex"
newbtn.style.marginTop="10px"
console.log(newbtn)
dev.append(newbtn)
let newpara = document.createElement("p")
newpara.innerText="this is my home where i used to play with my fellings.."
dev.prepend(newpara)
let btn2 = document.createElement("button")
btn2.innerText="submite "
btn2.style.margin="10px"
dev.after(btn2)
let newheading = document.createElement("h2")
newheading.innerText="Do your best"
dev.before(newheading);
newheading.remove()
