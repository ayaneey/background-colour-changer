const changeColor = document.getElementById("changeColor"),
  colors = ["blue", "green", "purple", "pink", "red", "orange", "yellow"];
let colorIndex = 0;

changeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

??