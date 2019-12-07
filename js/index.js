const logo = document.querySelector(".logo");

window.addEventListener("load", ()=>{
    logo.style.width = "40px";
    logo.style.height = "80px";
    logo.style.transform = "rotate(340deg)"
    logo.style.transition = "width 3s, height 3s, transform 3s"
});