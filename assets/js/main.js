// Dinamičko generisanje navigacije
let navigacija = ["Home","Services","Projects","Infos","Contact","Author"];
let navigacijaHref = ["top","services","projects","infos","contact","author.html"];

let navi1 = document.getElementById("nav1");
let navHtml = "";

for(let i = 0; i < navigacija.length; i++){

    if(navigacija[i] === "Author"){
        navHtml += `
            <li>
                <a href="${navigacijaHref[i]}">${navigacija[i]}</a>
            </li>
        `;
    } else {
        navHtml += `
            <li class="scroll-to-section">
                <a href="#${navigacijaHref[i]}">${navigacija[i]}</a>
            </li>
        `;
    }
}

navi1.innerHTML = navHtml;

navi1.innerHTML = navHtml;

let projects = [
    {
        title: "Digital Marketing Campaign",
        image: "assets/images/projects-01.jpg"
    },
    {
        title: "SEO Optimization Project",
        image: "assets/images/projects-02.jpg"
    },
    {
        title: "Web Development Solution",
        image: "assets/images/projects-03.jpg"
    },
    {
        title: "E-commerce Platform",
        image: "assets/images/projects-04.jpg"
    }
];

let projectsContainer = document.getElementById("projects-container");

projects.forEach(function(project){

    // Kreiranje glavnog diva
    let item = document.createElement("div");
    item.classList.add("item");

    // Kreiranje slike
    let img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    // Kreiranje sadržaja
    let downContent = document.createElement("div");
    downContent.classList.add("down-content");

    let title = document.createElement("h4");
    title.textContent = project.title;

    let link = document.createElement("a");
    link.href = "#";

    let icon = document.createElement("i");
    icon.className = "fa fa-link";

    link.appendChild(icon);
    downContent.appendChild(title);
    downContent.appendChild(link);

    item.appendChild(img);
    item.appendChild(downContent);

    projectsContainer.appendChild(item);

});

// Forma

document.getElementById("contact-form").addEventListener("submit", function(e){

    e.preventDefault(); // sprečava reload stranice

    // Uzimanje vrednosti
    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let errors = "";

    // REGEX za ime i prezime
    let nameRegex = /^[A-Za-z]{2,}$/;

    if(!nameRegex.test(name)){
        errors += "Name must contain only letters and at least 2 characters.<br>";
    }

    if(!nameRegex.test(surname)){
        errors += "Surname must contain only letters and at least 2 characters.<br>";
    }

    // REGEX za email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        errors += "Email is not valid.<br>";
    }

    // Subject ne sme biti prazan
    if(subject.length < 3){
        errors += "Subject must have at least 3 characters.<br>";
    }

    // Poruka mora imati minimum 10 karaktera
    if(message.length < 10){
        errors += "Message must have at least 10 characters.<br>";
    }

    // Ako ima grešaka
    if(errors !== ""){
        showMessage(errors, false);
    } else {
        showMessage("Form successfully submitted!", true);
        document.getElementById("contact-form").reset();
    }

});


// Funkcija za prikaz poruke
function showMessage(text, success){

    let oldMsg = document.getElementById("form-message");
    if(oldMsg){
        oldMsg.remove();
    }

    let msg = document.createElement("div");
    msg.id = "form-message";
    msg.style.marginTop = "15px";
    msg.style.fontWeight = "bold";

    if(success){
        msg.style.color = "green";
    } else {
        msg.style.color = "red";
    }

    msg.innerHTML = text;

    document.getElementById("contact-form").appendChild(msg);
}