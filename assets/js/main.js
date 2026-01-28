let navigacija = ["home","services","projects","infos","contact"];
let navigacijaHref = ["top","services","projects","infos","contact"];
let navi1 = document.getElementById("nav1");
let navHtml = "";
    for(let i=0; i<navigacija.length; i++){
        navHtml+=`<li class="scroll-to-section"><a href="#`+navigacijaHref[i]+` "class="active">`+navigacija[i]+`</a></li>`;
    }
navi1.innerHTML=navHtml;
