
//tansform logo on load
const logo = document.querySelector(".logo");

window.addEventListener("load", ()=>{
    logo.style.width = "40px";
    logo.style.height = "80px";
    logo.style.transform = "rotate(340deg)"
    logo.style.transition = "width 3s, height 3s, transform 3s"
});

//hover over links and rotate mini-logos

const linkDiv = document.querySelectorAll(".link-container");

const miniLogo = document.querySelectorAll('.link-logo');

linkDiv.forEach((x, i) =>{
    x.addEventListener("mouseenter", ()=>{
        miniLogo[i].style.transform = "rotate(360deg)";
        miniLogo[i].style.transition = "transform 3s";
        
    });

    x.addEventListener("mouseleave", ()=>{
        miniLogo[i].style.transform = "";
        miniLogo[i].style.transition = "";
        
    });
});


// randomly pick a p element and fade it in and out when entering a div


const allSectionP = document.querySelectorAll("section p");
const allDivs = document.querySelectorAll(".side-inside, .mtb-inside, .mid-main, .header-content");

//create mouse event
allDivs.forEach(x=>{
    x.addEventListener("mouseenter", ()=>{
        let randNum = Math.floor(Math.random() * Math.floor(35));
        allSectionP[randNum].style.animationName = "fadeIn";

        let fontRand = Math.floor(Math.random() * Math.floor(4));
        if(fontRand === 0){
            allSectionP[randNum].style.fontFamily = "'Saira Stencil One', cursive";
        }else if(fontRand === 1){
            allSectionP[randNum].style.fontFamily = "'Permanent Marker', cursive";
        }else if(fontRand === 2){
            allSectionP[randNum].style.fontFamily = "'Solway', serif";
        }else{
            allSectionP[randNum].style.fontFamily = "font-family: 'Bebas Neue', cursive;";
        }
    
    });

});


// reset animation

allSectionP.forEach(x=>{
    x.addEventListener("animationend", ()=>{
        x.style.animationName = "";
        x.style.fontFamily = "";
    });
});

