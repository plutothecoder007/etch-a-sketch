const container = document.querySelector(".container");     //Refers to the container in a variable.
container.style.width = "700px";
container.style.height = "700px";
container.style.display = "grid";

function createDivGrid (num) {
    let cellSize = 700 / num;       //Calculates the cell size so they all fit within the container.

    container.style.gridTemplateColumns = `repeat(${num}, ${cellSize}px)`;  //Set the size of columns based on cell size.
    container.style.gridTemplateRows = `repeat(${num}, ${cellSize}px)`;



    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
        div.style.border = "0.5px solid black";
        
        container.appendChild(div);
    }

}

createDivGrid(16)       //Loads a 16x16 grid by deafult.


function makeNewGrid () {          
    let size = prompt("Pick your grid size", 'Type grid size here.');       //size variable takes value from user input.

        if (size > 100) {
            prompt("That's too big. Choose a size under 100x100","Type grid size here.");
        } else if (size <= 0) {
            prompt("Grid size can't be negative", 'Type grid size here');
        }
        else {
            createDivGrid(size)
        }
}

