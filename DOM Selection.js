// DOM SELECTION

// getElementById
const judul = document.getElementById("judul");
judul.style.backgroundColor = "gray";
judul.innerHTML = "HAHAKABE";

// document.getElementByTagName()
// return HTMLCollection;
// menggunakan array maka elemen menggunakan [i]
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.fontFamily = "monospace";
// }

// menghasilkan HTML Collection
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";
// array karena HTML COllection berbentuk objek

// document.getElementsByClassName()
// inner HTML atau mengganti elemen
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini Adalah Paragraph";

// document.querrySelector() -> ELEMENT

const p4 = document.querySelector("#b p");
p4.style.color = "white";
p4.style.backgroundColor = "red";
p4.style.fontSize = "25px";

const li2 = document.querySelector("#b ul li:nth-child(3)");
li2.style.backgroundColor = "salmon";

const p = document.querySelectorAll("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "salmon";
}
