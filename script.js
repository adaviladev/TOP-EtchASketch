const container = document.querySelector(".container")

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    container.appendChild(div)
    div.setAttribute("class", "col")
    div.textContent = "Hola"
    div.style.border = "1px solid red"
    div.style.flex = "1"
}


container.style.display = "flex"
