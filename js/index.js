
//tansform logo on load
const logo = document.querySelector(".logo");

window.addEventListener("load", ()=>{
    logo.style.width = "40px";
    logo.style.height = "80px";
    logo.style.transform = "rotate(340deg)"
    logo.style.transition = "width 3s, height 3s, transform 3s"
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
        source: "projects.html",
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
        source: "https://www.linkedin.com/in/r-dowd-a29a58196/",
        class1: "fab",
        class2: "fa-linkedin" 
    },
    {
        source: "https://www.facebook.com/rjarrett.dowd",
        class1: "fab",
        class2: "fa-facebook-square" 
    },
    {
        source: "https://twitter.com/DowdJarrett",
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
        link.href = x.source;
        link.style.cursor = "pointer";

        link.appendChild(icon);
        div.appendChild(link);

    });

    return div;
    
}
