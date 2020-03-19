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
        decription: "Well versed in JavaScript for dynamic and interactive web sites.",
        color: "#ffff00"
    },
    {
        symbol: "fa-react",
        title: "React",
        decription: "Experienced in React, JSX and Redux for creating dynamic web apps.",
        color: "#2e9cca"
    }

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