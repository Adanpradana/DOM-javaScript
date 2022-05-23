// element.innerHTML
// const judul = document.getElementById("juduli");
// judul.innerHTML = "ADANPRADANA";

// manipulation DOM per section
// const a = document.querySelector("section#a");
// a.innerHTML = "<div><h1>Hello World</h1></div>";

// manipuulation style
// const style = document.querySelector("section#b");
// style.style.backgroundColor = "salmon";

// set attribut to emelement
// const judul = document.getElementsByTagName("h1")[0];
// const a = document.querySelector("section#a a");
// a.setAttribute("class", "link "); // akan menimpa kelas

//  classList akan menambahkan kelas

const p2 = document.querySelector(".p2");
p2.classList.replace("p2", "p12");

// Element.classList.add()  -> menambahkan kelas baru(tanpa menghapus kelas 1)
// Element.classList.remove()  -> menghapus kelas
// Element.classList.toogle(); -> mengecek ada kelas atau ngga. jika true ditambahkan, jika false dihapus
// Element.classList.item(); -> mencari urutan kelas
// Element.classList.contains(); -> mengcek apakah ada kelas. mengembalikan true dan false
// Element.classList.replace() -> mengembalikan nilai (mengganti kelas)
