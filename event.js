function color() {
  p2.style.backgroundColor = "salmon";
}
const p2 = document.querySelector(".p2");
p2.onclick = color;

const p4 = document.querySelector("section#b p");

p4.addEventListener("click", () => {
  const ul = document.querySelector("section#b ul");
  const newLi = document.createElement("li");
  const newTextNode = document.createTextNode("item 4");
  newLi.appendChild(newTextNode);
  ul.appendChild(newLi);
});
