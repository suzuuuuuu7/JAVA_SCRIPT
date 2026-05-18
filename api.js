const URL = "https://randomuser.me/api/1.4/";
let para = document.querySelector(".para");
let para1 = document.querySelector(".para1")
let btn = document.querySelector("#btn");
const getFacts = async()=>{
    console.log("fetching....")
    let response = await fetch(URL);
    console.log(response);
    let data =await response.json();
    console.log(data)
    console.log(data.results[0].name)
    para.innerText = JSON.stringify(data.results[0].name)
 para1.innerText = JSON.stringify(data.results[0].location)

}
btn.addEventListener("click",getFacts)