const h1 = document.createElement("h1");
const textH1 = document.createTextNode("HELLO WORLD!");
h1.appendChild(textH1);
document.body.appendChild(h1);

// button #1
const button = document.createElement("button");
const textButton = document.createTextNode("HIT ME UP !!");
button.appendChild(textButton);
document.body.appendChild(button);
button.setAttribute("type", "button");
button.setAttribute("id", "button");
//Button #2
const button2 = document.createElement("button");
const textButton2 = document.createTextNode("HIT ME MORE");
button2.appendChild(textButton2);
button.after(button2);
button.setAttribute("type", "button");
button.setAttribute("id", "button2");

button.addEventListener("click", () => {
  document.body.classList.toggle("salmon");
});

//get random number
button2.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

//new element
const br = document.createElement("br");
button2.after(br);

const slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.setAttribute("min", "0");
slider.setAttribute("max", "255");
document.body.appendChild(slider);

slider.addEventListener("change", () => {
  const red = slider.value;
  const green = slider.value;
  document.body.style.backgroundColor = `rgb(${red},0,0)`;
});

const slider2 = document.createElement("input");
slider2.setAttribute("type", "range");
slider2.setAttribute("min", "0");
slider2.setAttribute("max", "255");
document.body.appendChild(slider2);

slider2.addEventListener("change", () => {
  const red = slider2.value;
  const green = slider2.value;
  document.body.style.backgroundColor = `rgb(0,${green},0)`;
});

const slider3 = document.createElement("input");
slider3.setAttribute("type", "range");
slider3.setAttribute("min", "0");
slider3.setAttribute("max", "255");
document.body.appendChild(slider3);
slider3.addEventListener("change", () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red},${green},0)`;
});
