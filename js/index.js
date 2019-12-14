
//tansform logo on load
const logo = document.querySelector(".logo");

window.addEventListener("load", ()=>{
    logo.style.width = "40px";
    logo.style.height = "80px";
    logo.style.transform = "rotate(340deg)"
    logo.style.transition = "width 3s, height 3s, transform 3s"
});



// randomly pick a p element and fade it in and out when entering a div


const allSectionP = document.querySelectorAll(".fadeP p");
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
        source: "skills.html",
    },
    {
        name: "Projects",
        source: "#",
    },
];

//nav bar

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
        link.href = x.source;
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
        link.style.cursor = "pointer";

        link.appendChild(icon);
        div.appendChild(link);

    });

    return div;
    
}


//Skill Cards

const skillData = [
    {
        symbol: "fa-html5",
        title: "HTML",
        decription: "Proficient in semantic html for more efficient SEO.",
        color: "red"
    },
    {
        symbol: "fa-css3-alt",
        title: "CSS and LESS",
        decription: "Expert knowledge in css using less preprocessors for beautiful content.",
        color: "green"
    },
    {
        symbol: "fa-js-square",
        title: "JavaScript",
        decription: "Well versed in Java Script for dynamic and interactive web sites.",
        color: "#2e9cca"
    },

];

const skillsContainer = document.querySelector(".skills-container");

skillsContainer.appendChild(skillsCard(skillData));

function skillsCard(arr){
    const containDiv = document.createElement("div");

    arr.forEach(x=>{
        const card = document.createElement("div");
        const symbolDiv = document.createElement("div");
        const symbol = document.createElement("i");
        const decripDiv = document.createElement("div");
        const title = document.createElement("h2");
        const decrip = document.createElement("p");

        card.classList.add("skill-card");
        symbolDiv.classList.add("skill-symbol");
        symbol.classList.add("fab");
        symbol.classList.add(x.symbol)
        decripDiv.classList.add("description");
        symbol.style.color = x.color;
        title.style.color = x.color;
        title.textContent = x.title;
        decrip.textContent = x.decription

        card.appendChild(symbolDiv);
        symbolDiv.appendChild(symbol);
        card.appendChild(decripDiv);
        decripDiv.appendChild(title);
        decripDiv.appendChild(decrip);

        containDiv.appendChild(card);

    });

    return containDiv;

}
                //<div>
                // <div class="skill-card">
                //     <div class="skill-symbol">
                //         <i class="fab fa-html5"></i>
                //     </div>
                //     <div class="description">
                //         <h2>HTML</h2>
                //         <p>Proficent in semantic html for more efficent SEO.</p>
                //     </div>
                // </div>
                //</div>