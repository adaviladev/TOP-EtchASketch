const container = document.querySelector(".container");
let isDragging = false;

function makeNewGrid(num) {
  container.innerHTML = "";
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "col");
    div.textContent = "";
    div.style.border = "1px solid black";
    div.style.flex = `0 0 calc(100% / ${num})`;
    div.style.height = `calc(100% / ${num})`;
    div.style.boxSizing = "border-box";
    div.style.transition = "background 0.3s ease";

    div.addEventListener("mousedown", function () {
      isDragging = true;
      div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
    });

    div.addEventListener("mouseover", function () {
      if (isDragging) {
        div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
      }
    });

    container.appendChild(div);
  }

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "100%";
container.style.height = "100vh";

const makeGridBtn = document.querySelector(".makeGridBtn");
makeGridBtn.addEventListener("click", function () {
  const num = parseInt(prompt("How many squares per side do you want? (max 100)"), 10);
  if (!isNaN(num) && num > 0 && num <= 100) {
    makeNewGrid(num);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});