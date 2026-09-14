// alert("sdfgh")
let xclose = document.querySelector(".close")
let para = document.querySelector(".para")
let dialog = document.querySelector("dialog")
let newbtn = document.createElement("button")
newbtn.innerText = "copy code";
para.after(newbtn)
function copyText(){
    navigator.clipboard.writeText(para.innerText);
    dialog.showModal();
}
function btnClose(){
    dialog.close();
}
xclose.addEventListener("click",btnClose)
newbtn.addEventListener("click" , copyText);
