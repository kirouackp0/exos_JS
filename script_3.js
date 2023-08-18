// 2.2.2 Pyramide de Mario

// inverted pyramid(upside-down)
let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

let floorsint = parseInt(floors);

function createPyramid(floorsint) {
    while(floorsint > 0) {
        var result = "#".repeat(floorsint);
        console.log(result);
        floorsint--;
    }
}

createPyramid(floorsint);

// right-side up
/*
let int = 5

function createPyramid(int) {
    let hashes = "#".repeat(int);
    let spaces = "";
    while(int > 0) {
        spaces = " ".repeat(int - 1);
        console.log(hashes + spaces);
        hashes = hashes.slice(0,-1);
        int--;
    }
}

createPyramid(int); 
*/