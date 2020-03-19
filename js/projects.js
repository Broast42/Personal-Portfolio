



const projectData = [
    {
        title: "Celebrity Dead or Alive",
        link: "https://celeb-dead-or-alive.netlify.com/",
        imageSrc: "img/celeb-doa.jpeg",
        imageAlt: "Celeb Dead or Alive",
        description: "A landing page for a web app that quizzes you on your knowledge of dead or alive celebrities. ",
        techIcons: [{class:"fa-html5", color: "red"},{class:"fa-css3-alt", color: "green"},{class:"fa-js-square", color: "#ffff00"}],
        techDescrp: ["Used semantic HTML markup.","Used LESS preprocessor fo CSS styling.","Used JavaScript for mini quiz."],
        gitLink: "https://github.com/Build-Week-PT-Celebrity-Dead-Or-Alive/Marketing-Page"

    },
    {
        title: "Tile Time Gaming",
        link: "https://ttgaming.netlify.com/index.html",
        imageSrc: "img/tile-time.jpeg",
        imageAlt: "ttgaming",
        description: "A site for board games I have invented. Mainly a place for easy access to instruction manuals. ",
        techIcons: [{class:"fa-html5", color: "red"},{class:"fa-css3-alt", color: "green"}],
        techDescrp: ["Used semantic HTML markup.","Used LESS preprocessor fo CSS styling."],
        gitLink: "https://github.com/Broast42/tile-time-gaming"

    },
    {
        title: "Rick's Rick and Morty Fan Page",
        link: "https://ricks-rick-and-morty-fan-page.now.sh/",
        imageSrc: "img/rick-morty.png",
        imageAlt: "rick-morty",
        description: "A simple Rick and Morty Fan page using React",
        techIcons: [{class:"fa-react", color: "#2e9cca"}],
        techDescrp: ["Used React and JSX", "Used styled components for styling"],
        gitLink: "https://github.com/Broast42/Sprint-Challenge-Single-Page-Apps"

    },
    
];

const pageContain = document.querySelector(".projects-container");

pageContain.appendChild(projectCards(projectData));

function projectCards(arr){
    const mainContain = document.createElement("div");

    arr.forEach(x=>{
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("project-card");
        mainContain.appendChild(cardDiv);

        const title = document.createElement("h2");
        title.textContent = x.title;
        cardDiv.appendChild(title);

        const link = document.createElement("a");
        link.href = x.link;
        link.textContent = x.link;
        cardDiv.appendChild(link);

        const picContain = document.createElement("a");
        picContain.href = x.link;
        cardDiv.appendChild(picContain);

        const pic = document.createElement("img");
        pic.src = x.imageSrc;
        pic.alt = x.imageAlt;
        picContain.appendChild(pic);

        const desc = document.createElement("p");
        desc.textContent = x.description;
        cardDiv.appendChild(desc);

        const techContain = document.createElement("div");
        techContain.classList.add("centerI");
        cardDiv.appendChild(techContain);

        const techHeading = document.createElement("h3");
        techHeading.textContent = "Tech Used";
        techContain.appendChild(techHeading);

        x.techIcons.forEach(y =>{
            const icon = document.createElement('i');
            icon.classList.add("fab");
            icon.classList.add(y.class);
            icon.style.color = y.color;
            techContain.appendChild(icon);
        });

        const unList = document.createElement("ul");
        cardDiv.appendChild(unList);

        x.techDescrp.forEach(z =>{
            const listItem = document.createElement("li");
            listItem.textContent = z;
            unList.appendChild(listItem);
        });

        const gitTitle = document.createElement("h4");
        gitTitle.textContent = "Git Hub:";
        cardDiv.appendChild(gitTitle);

        const linkGit = document.createElement("a");
        linkGit.href = x.gitLink;
        linkGit.textContent = x.gitLink;
        cardDiv.appendChild(linkGit);

    });

    return mainContain;

}


                // <div>
                //     <div class="project-card">
                //         <h2>Title</h2>
                //         <a href="#">link</a>
                //         <a href="https://celeb-dead-or-alive.netlify.com/">
                //             <img src="img/celeb-doa.jpeg" alt="celeberty dead or alive">
                //         </a>                       
                //         <p> one or two sentances about work</p>                       
                //         <div class="centerI"> 
                //             <h3>Tech Used</h3>
                //             <i class="fab fa-html5"></i>
                //             <i class="fab fa-css3-alt"></i>
                //         </div>                       
                //         <ul>
                //             <li>
                //                 tech kjkashhfsghddf
                //             </li>
                //             <li>
                //                 tech2
                //             </li>
                //         </ul>
                //         <h4>Git Hub:</h4>
                //         <a href="#">git hub link</a>
                //     </div>  
                // </div>                