let navigacija = ["home","services","projects","infos","contact"];
let navigacijaHref = ["top","services","projects","infos","contact"];
let navi1 = document.getElementById("nav1");
let navHtml = "";
    for(let i=0; i<navigacija.length; i++){
        navHtml+=`<li class="scroll-to-section"><a href="#`+navigacijaHref[i]+` " class="active">`+navigacija[i]+`</a></li>`;
    }
navi1.innerHTML=navHtml;

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

    // REGEX za ime i prezime (samo slova, minimum 2 karaktera)
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