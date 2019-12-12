
//tansform logo on load
const logo = document.querySelector(".logo");

window.addEventListener("load", ()=>{
    logo.style.width = "40px";
    logo.style.height = "80px";
    logo.style.transform = "rotate(340deg)"
    logo.style.transition = "width 3s, height 3s, transform 3s"
});

//hover over links and rotate mini-logos

// const linkDiv = document.querySelectorAll(".link-container");

// const miniLogo = document.querySelectorAll('.link-logo');

// linkDiv.forEach((x, i) =>{
//     x.addEventListener("mouseenter", ()=>{
//         miniLogo[i].style.transform = "rotate(360deg)";
//         miniLogo[i].style.transition = "transform 3s";
        
//     });

//     x.addEventListener("mouseleave", ()=>{
//         miniLogo[i].style.transform = "";
//         miniLogo[i].style.transition = "";
        
//     });
// });


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

//header link data (edit this to edit nav links)

const navData = [
    {
        name: "Home",
        source: "index.html"
    },
    {
        name: "About Me",
        source: "about.html"
    },
    {
        name: "Skills",
        source: "#",
    },
    {
        name: "Projects",
        source: "#",
    },
];

//nav bar

                    // <nav>
                    //     <div class="link-container">
                    //         <div class="link-logo">
                    //             <div class="link-logo-content"></div>
                    //         </div>
                    //         <a href="index.html">Home</a>
                    //     </div>
                    //     <div class="link-container">
                    //         <div class="link-logo">
                    //             <div class="link-logo-content"></div>
                    //         </div>
                    //         <a href="#">About Me</a>
                    //     </div >
                    //     <div class="link-container">
                    //         <div class="link-logo">
                    //             <div class="link-logo-content"></div>
                    //         </div>
                    //         <a href="#">Skills</a>
                    //     </div>
                    //     <div class="link-container">
                    //         <div class="link-logo">
                    //             <div class="link-logo-content"></div>
                    //         </div>
                    //         <a href="#">Projects</a>
                    //     </div>    
                    // </nav>

const navBarDiv = document.querySelector("#nav");
navBarDiv.appendChild(createNav(navData));

function createNav(arr){
    const nav = document.createElement("nav");

    arr.forEach(x =>{
        const container = document.createElement("div");
        const logo = document.createElement("div");
        const logoContent = document.createElement("div");
        const link = document.createElement("a");

        container.classList.add("link-container");
        logo.classList.add("link-logo");
        logoContent.classList.add("link-logo-content");
        link.src = x.source;
        link.textContent = x.name;

        nav.appendChild(container);              
        container.appendChild(logo);
        logo.appendChild(logoContent);
        container.appendChild(link);

        container.addEventListener("mouseenter", ()=>{
            logo.style.transform = "rotate(360deg)";
            logo.style.transition = "transform 3s";
                     
        });

        container.addEventListener("mouseleave", ()=>{
            logo.style.transform = "";
            logo.style.transition = "";
        });
    });

    return nav;

}

//footer data object (edit this to edit footer links)

const footerData = [
    {
        source: "#",
        class1: "fab",
        class2: "fa-linkedin" 
    },
    {
        source: "#",
        class1: "fab",
        class2: "fa-facebook-square" 
    },
    {
        source: "#",
        class1: "fab",
        class2: "fa-twitter-square" 
    },

];


const footer = document.querySelector("footer");

footer.appendChild(createFooter(footerData));


function createFooter(arr){
    const div = document.createElement("div");

    arr.forEach(x=>{
        const link = document.createElement('a');
        const icon = document.createElement('i');

        icon.classList.add(x.class1, x.class2);
        link.src = x.source;

        link.appendChild(icon);
        div.appendChild(link);

    });

    return div;
    
}


