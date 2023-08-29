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

console.log("Entrepreneurs par année de naissance", entrepreneurs);

// array entrepreneurs nés années 70
let entrepreneursSeventies = entrepreneurs.filter(function(entrepreneur) {
    return entrepreneur.year >= 1970 && entrepreneur.year <= 1979;
});

console.log("Entrepreneurs nés dans les années 70", entrepreneursSeventies);

// âge des entrepreneurs aujourd'hui
let age = entrepreneurs.map (function(entrepreneur) {
    return 2023 - entrepreneur.year;
});

console.log("Age actuel des entrepreneurs", age);

// array contenant le prenom et nom
let entrepreneurNames = entrepreneurs.map(function(entrepreneur) {
    return entrepreneur.first + ' ' + entrepreneur.last;
});
console.log("Noms et prénoms des entrepreneurs", entrepreneurNames);

// par ordre alphabétique nom de famille
entrepreneurs.sort(function(a,b) {
    return a.last.localeCompare(b.last);
});

console.log("Entrepreneurs par orde alphabétique (nom de famille)", entrepreneurs);