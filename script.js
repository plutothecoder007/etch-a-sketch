const container = document.querySelector(".container");     //Refers to the container in a variable.
container.style.width = "700px";
container.style.height = "700px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "flex-start"; // Align items to the start of the row
container.style.alignItems = "flex-start"; // Align items to the start of the column

const btn = document.querySelector(".button");      //Refers to button as a 'btn' variable.
btn.addEventListener("click", makeNewGrid)


function createDivGrid (num) {
    let cellSize = 700 / num;       //Calculates the cell size so they all fit within the container.

    container.innerHTML = ""        //Cleans the container to avoid appending to the existing grid

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
        div.style.border = "0.5px solid black";
        div.style.boxSizing = "border-box"; // Ensure padding and border do not affect width/height
        div.style.flexGrow = "1";
        container.appendChild(div);
    }

}




function makeNewGrid () {          
    let size = Number(prompt("Pick your grid size", 'Type grid size here.'));       //size variable takes value from user input.

    while (size > 100 || size <= 0 || isNaN(size)) {
        if (size > 100) {
            size = parseInt(prompt("That's too big. Choose a size under 100x100", "Type grid size here"));
        } else if (size <= 0) {
            size = parseInt(prompt("Grid size can't be negative", "Type grid size here"));
        } else if (isNaN(size)) {
            size = parseInt(prompt("Please enter a valid number", "Type grid size here"));
        }
    }

    createDivGrid(size);
}

