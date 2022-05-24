// DOM Manipulation
// new element
const newP = document.createElement("p"); //membuat tag p
const newText = document.createTextNode("p baru JS"); //membuat tulisan di dalam p baru

// simpan ke dalam paragraf
newP.appendChild(newText);

// simpan ke dalam section atau #a
const sectionA = document.getElementById("a");
sectionA.appendChild(newP);

// --------------------------------//

const newLi = document.createElement("li");
const newTextLi = document.createTextNode("Item 1,5");

newLi.appendChild(newTextLi); // tolong buatkan newTextLi di dalam newLi

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(newLi, li2);

// -------------------------------------//

const link = document.querySelector("section#a a");
sectionA.removeChild(link); //remove element / remove node

//-------------------------------------//

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const newH2 = document.createElement("h2");
const newTextH2 = document.createTextNode("HEADING BARU");
newH2.appendChild(newTextH2);

sectionB.replaceChild(newH2, p4);
