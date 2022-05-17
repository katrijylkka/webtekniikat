//Dom-manipulointi, eventit ja Rest-Api

// Tässä on muo
//Tässä luodaan uusi li-elementti listaan ja poistetaan ensimmäinen elementti

let ul = document.querySelector("#list");
let li = document.createElement("li");
li.textContent = "Kuumakivihoitaja"
ul.appendChild(li)
ul.firstElementChild.remove();



// Tässä muokattu tyylejä  
//
//
//

// Tässä on käytössä RandomFox API (Rest)


fetch('https://randomfox.ca/floof/')
.then(response => response.json())
.then(
data => document.getElementById('print-here').innerHTML 
  = '<img src="' + data.image + '"/>'
  );



// Eventtejä //Eventtejä // Eventtejä //Eventtejä //Eventtejä //Eventtejä //Eventtejä

  // Tässä eventissä tulee alert, kun napin päälle viedään hiiri

 let button = document.getElementById("try")

 button.addEventListener("mouseover", tryFunction);
 
 function tryFunction() {
  alert("Paina ()-nappi pohjaan saadaksesi eventin aikaan"), (false);

 }

 // Tässä näkee milloin sivustoa on viimeks muokattu

document.getElementById("upDate").innerHTML = document.lastModified;

// Tällä pystytään avaamaan documentti uuteen välilehteen

function myFunction() {
    let openCv  = window.open();
    openCv.document.open();
    openCv.document.write("<h2<p>Tälle sivulle voisi avautua Sirkan CV!</p>");
    openCv.document.close();
  }

//tässä muutettu taustan väriä napin painalluksella

let button2 = document.getElementById("button2")
button2.addEventListener("click", myColorFunction)

 function myColorFunction() {
    document.getElementById("background").style.backgroundColor = "rgb(10, 56, 10)";
  }  


 // Kun footeria klikkaa muuttuu 
let footer = document.getElementById("text");

footer.addEventListener("click", myFooterFunction)

function myFooterFunction() {
  document.getElementById("footer").innerHTML = " <p>KIITOS KUN ASIOIT MEILLÄ! <br> NOTKEUDESSA NÄHDÄÄN!</p>";
}
