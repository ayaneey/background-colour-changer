const changeColor = document.getElementById("changeColor"),
  colors = ["red", "green", "blue"];
let colorIndex = 0;

changeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});
