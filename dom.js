//Dom-manipulointi

//Yksinkertainen otsikon manipulointi

document.querySelector("h2").textContent= "Tietoa yrittäjästä";

//Tässä luodaan uusi li-elementti listaan ja poistetaan ensimmäinen elementti

let ul = document.querySelector("#list");
let li = document.createElement("li");
li.textContent = "Kuumakivihoitaja"
ul.appendChild(li)
ul.firstElementChild.remove();

// Tässä näkee milloin sivustoa on viimeks muokattu

document.getElementById("upDate").innerHTML = document.lastModified;

// Tällä pystytään avaamaan documentti uuteen välilehteen

function myFunction() {
    let openCv  = window.open();
    openCv.document.open();
    openCv.document.write("<h2<p>Tälle sivulle voisi avautua Sirkan CV!</p>");
    openCv.document.close();
  }

// Tässä muokattu tyylejä  


//tässä muutettu taustan väriä napin painalluksella

 function myColorFunction() {
    document.getElementById("background").style.backgroundColor = "rgb(226, 214, 197)";
  }

