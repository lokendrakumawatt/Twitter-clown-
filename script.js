// alert("hey")
let li = document.querySelectorAll(".raju")
function change(){
    li.forEach((item)=>{

        // item.style.backgroundColor = "black";
        item.style.textColor = "white";
        item.classList.toggle("hidden")
    })
}
let menu = document.querySelector(".menu")
menu.addEventListener("click",change)
let 