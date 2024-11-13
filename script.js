const container = document.querySelector(".container");     //Refers to the container in a variable.
container.style.width = "700px";
container.style.height = "700px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "flex-start"; // Align items to the start of the row
container.style.alignItems = "flex-start"; // Align items to the start of the column


const btn = document.querySelector(".button");      //Refers to button as a 'btn' variable.
btn.addEventListener("click", makeNewGrid)

const cleanButton = document.querySelector("#clean");
cleanButton.addEventListener("click", cleanCanvas);

let isPainting = false; 


createDivGrid(16);      //Sets grid size to 16x16 by default.

function createDivGrid (num) {
    let cellSize = 700 / num;       //Calculates the cell size so they all fit within the container.

      

    container.innerHTML = ""        //Cleans the container to avoid appending to the existing grid

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        div.id = "box";
        div.style.display = "flex";
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
        div.style.border = "0.5px solid black";
        div.style.boxSizing = "border-box"; // Ensure padding and border do not affect width/height
        div.style.flexGrow = "1";

        container.appendChild(div);

        // Add mouse events for painting effect
        div.addEventListener("mousedown", () => {
            isPainting = true;
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            
            let rgb = [r, g, b];
            let randomColour = `rgb(${r}, ${g}, ${b})`;
            div.style.backgroundColor = randomColour; // Paint immediately on click
        });

        div.addEventListener("mouseenter", () => {
            if (isPainting) {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                
                let rgb = [r, g, b];
                let randomColour = `rgb(${r}, ${g}, ${b})`;
                div.style.backgroundColor = randomColour; // Paint on hover if mouse is held down
            }
        });
    }

    // Reset painting flag when mouse is released anywhere on the page
    document.addEventListener("mouseup", () => {
        isPainting = false;
    });
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

// Function to change the background color of the div when clicked
function changeBgColour(event) {
    event.target.style.backgroundColor = "black"; 
}

function cleanCanvas () {   
    const cells = container.querySelectorAll("div"); // Select all child divs in the container
    cells.forEach(cell => {
        cell.style.backgroundColor = ""; // Reset the background color of each cell
    })
}





