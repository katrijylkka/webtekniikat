//Dom-manipulointi, eventit ja Rest-Api


// Otsikon tekstiä muokataan. Queryselectorilla, voi valita myös elementtejä (ei tarvitse aina olla class tai id) 

let title = "Tällä sivulla olen harjoitellut SASSsia ja DOMia"
 let  h1Title = document.querySelector("h1");
h1Title.innerHTML = title; 

// Tässä kaikkien col-sm-12 -elementtien värit muutetaan. 

let columns = document.querySelectorAll(".col-sm-12");
columns.forEach( element => {
  element.style.backgroundColor = "rgb(10, 56, 10)"
});

//Tässä luodaan uusi li-elementti listaan ja poistetaan ensimmäinen elementti

let ul = document.querySelector("#list");
let li = document.createElement("li");
li.textContent = "Kuumakivihoitaja"
ul.appendChild(li)
ul.firstElementChild.remove();

// Tässä muokataan sivuston alareunassa olevan "tekijä- tekstin tyylejä: kokoa, kirjoitusasua ja poistan text-decorationit

document.getElementById("maker").style.fontSize = "large";
document.getElementById("maker").style.fontFamily = "Arial";
document.getElementById("maker").style.textDecoration = "none";
document.getElementById("maker").style.color = "green";

// Tässä muokattu navbarin nappia

document.getElementById("special").style.paddingRight = "50px";
document.getElementById("special").style.paddingLeft = "50px";
document.getElementById("special").style.backgroundColor = "rgb(211, 84, 49)"

// Tässä manipuloidaan classin nimeä.

let div = document.getElementById("article");
div.className = "manipulated"
div.classList.add = "class"  // Class on nyt "manipulated class"
div.classList.remove("manipulated") // Class on nyt nimeltään "class"


// Tässä luon sivuston alareunaan uuden elementin, mikä pitää sisällään tekstiä.

const body = document.body;
const strong = document.createElement("strong");
strong.innerText = "Tällä sivulla harjoitellaan Javascriptiä ja cssää." ; 
body.append(strong);

// Tässä luon hr -elementin sivulle 

let something = document.createElement("hr");
document.getElementById("insert").appendChild(something);


// Tässä on käytössä RandomFox API (Rest)


fetch('https://randomfox.ca/floof/')
.then(response => response.json())
.then(
data => document.getElementById('print-here').innerHTML 
  = '<img src="' + data.image + '"/>'
  );

// Eventtejä //Eventtejä // Eventtejä //Eventtejä //Eventtejä //Eventtejä //Eventtejä

  // Tässä eventissä tulee alert, kun napin päälle viedään hiiri

 var button = document.getElementById("try")

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

 // Kun footeria klikkaa muuttuu teksti
let footer = document.getElementById("text");

footer.addEventListener("click", myFooterFunction)

  function myFooterFunction() {
    document.getElementById("footer").innerHTML = " <p>KIITOS KUN ASIOIT MEILLÄ! <br> NOTKEUDESSA NÄHDÄÄN!</p>";
  }

//tässä muutettu taustan väriä napin painalluksella

let button2 = document.querySelector("#button2")
button2.addEventListener("click", myColorFunction)

 function myColorFunction() {
    document.getElementById("background").style.backgroundColor = "rgb(211, 84, 49);";
  }  


