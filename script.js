// 2.1.1 Bonjour
/*
let a = "Bonjour"
let b = "monde"
console.log(a + ", " + b + "!") 

// 2.1.2 Salut
let name = prompt("Comment t'appelles-tu ?");

function sayHelloInFrench() {
    console.log(`Salut, ${name}`);
}

sayHelloInFrench();

*/
// 2.2.1 Calculs rapides
/*
let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
let numInt = parseInt(num);

// loop

function calculateFactorial(numInt) {
    var result = numInt;
    if (numInt === 0 || numInt === 1)
        return 1;
    while (numInt > 1) {
        numInt --;
        result *= numInt;
    }
    return result;
}

// recursion
function calculateFactorial(numInt) {
    if (numInt === 0 || numInt === 1) {
        return 1;
    }
    return numInt * calculateFactorial(numInt - 1);
}

console.log(calculateFactorial(numInt));


// 2.2.2 Pyramide de Mario

// inverted
let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let int = parseInt(floors);

function createPyramid(int) {
    while(int > 0) {
        var result = "#".repeat(int);
        console.log(result);
        int--;
    }
}

createPyramid(int);

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


// 2.3.1 Startup Nation

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// sorts from lowest to highest by year
entrepreneurs.sort(function(a,b) {
    return a.year - b.year;
});

console.log(entrepreneurs);

// array entrepreneurs nés années 70
let entrepreneursSeventies = entrepreneurs.filter(function(entrepreneur) {
    return entrepreneur.year >= 1970 && entrepreneur.year <= 1979;
});

console.log(entrepreneursSeventies);

// âge des entrepreneurs aujourd'hui
let age = entrepreneurs.map (function(entrepreneur) {
    return 2023 - entrepreneur.year;
});

console.log(age);

// array contenant le prenom et nom
let entrepreneurNames = entrepreneurs.map(function(entrepreneur) {
    return entrepreneur.first + ' ' + entrepreneur.last;
});
console.log(entrepreneurNames);

// par ordre alphabétique nom de famille
entrepreneurs.sort(function(a,b) {
    return a.last.localeCompare(b.last);
});

console.log(entrepreneurs);
*/

// BIBLIOTHÉCAIRE

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];