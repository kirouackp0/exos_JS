// BIBLIOTHÉCAIRE

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi jai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// see if book never borrowed

let anyNotBorrowed = books.some(function(book) {
  return book.rented === 0;
});

if (anyNotBorrowed) {
  console.log("At least one book has not been borrowed.");
} else {
  console.log("All books have been borrowed at least once.");
}

// most borrowed book
books.sort(function(a, b) {
  return b.rented - a.rented;
});

console.log("Most rented book:", books[0]);

// least borrowed book

books.sort(function(a, b) {
  return a.rented - b.rented;
});

console.log("Least rented book:", books[0]);

// Book with ID 873495

let bookWithId873495 = books.find(function(book) {
  return book.id === 873495;
});

if (bookWithId873495) {
  console.log("Found book:", bookWithId873495);
} else {
  console.log("Book not found.");
}

// Delete book with ID 133712
// .filter creates a new array will all books except the one specified

let idToDelete = 133712;

let updatedBooks = books.filter(function(book) {
  return book.id !== idToDelete;
});

console.log("Supprimer un livre", updatedBooks);

// Sorted alphabetically

updatedBooks.sort(function(a,b) {
    return a.title.localeCompare(b.title);
});

console.log("Livres par ordre alphabétique", updatedbooks)


updatedBooks.sort(function(a,b) {
    return a.title.localeCompare(b.title);
});

console.log("Livres par ordre alphabétique", updatedbooks)