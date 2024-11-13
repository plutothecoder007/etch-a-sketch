const container = document.querySelector(".container");     //Makes the main container
container.style.width = "700px";
container.style.height = "700px";

function makeGrid () {          
    let size = prompt("Pick your grid size", 'Type grid size here.');

        if (size > 100) {
        prompt("That's too big. Choose a size under 100x100","Type grid size here.");
        } 
}

function createDivs (num) {
    let width = Number(num);
    let height = Number(num);
    const div = document.createElement("div");
    div.style.width = amount;

}

