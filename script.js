const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  h1.innerText = `Current RGB value = (${r}, ${g}, ${b})`;
});
