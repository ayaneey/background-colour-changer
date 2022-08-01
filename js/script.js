const changeColor = document.getElementById("changeColor"),
  colors = [
    "#007bff",
    "#6610f2",
    "#e83e8c",
    "#dc3545",
    "#fd7e14",
    "#ffc107",
    "#28a745",
    "#20c997",
    "#17a2b8",
    "#fff",
  ];
let colorIndex = 0;

changeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});
