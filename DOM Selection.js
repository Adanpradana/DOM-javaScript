// DOM SELECTION

// getElementById
const judul = document.getElementById("judul");
judul.style.backgroundColor = "gray";
judul.innerHTML = "HAHAKABE";

// document.getElementByTagName()
// return HTMLCollection;
// menggunakan array maka elemen menggunakan [i]
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.fontFamily = "monospace";
}

// menghasilkan HTML Collection
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";
// array karena HTML COllection berbentuk objek

// document.getElementsByClassName()
// inner HTML atau mengganti elemen
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini Adalah Paragraph";
