// Sample dataset
const books = [
  {
    title: "The Hobbit",
    author: "Tolkien",
    year: 1937,
    rating: 4.7,
    genres: ["Fantasy"],
  },
  {
    title: "1984",
    author: "Orwell",
    year: 1949,
    rating: 4.8,
    genres: ["Dystopian", "Political Fiction"],
  },
  {
    title: "The Name of the Wind",
    author: "Rothfuss",
    year: 2007,
    rating: 4.5,
    genres: ["Fantasy", "Adventure"],
  },
  {
    title: "Brave New World",
    author: "Huxley",
    year: 1932,
    rating: 4.2,
    genres: ["Dystopian"],
  },
  {
    title: "Dune",
    author: "Herbert",
    year: 1965,
    rating: 4.6,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Fahrenheit 451",
    author: "Bradbury",
    year: 1953,
    rating: 4.3,
    genres: ["Dystopian", "Science Fiction"],
  },
  {
    title: "The Road",
    author: "McCarthy",
    year: 2006,
    rating: 4.0,
    genres: ["Post-Apocalyptic"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Lee",
    year: 1960,
    rating: 4.9,
    genres: ["Classic", "Coming-of-Age"],
  },
];


//TASK 1
function getRecentBooks(books, afterYear) {
  let recentBooks = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].year >= afterYear) {
      recentBooks.push(books[i].title);
    }
  }
  return recentBooks;
}

// TASK 2
function getAverageRating(books) {
  let total = 0;

  for (let i = 0; i < books.length; i++) {
    total += books[i].rating;
  }

  let average = total / books.length;
  return average.toFixed(2);
} 

// TASK 3
function sortBooksBy(books, key, asc = true) {
  let sortedBooks = [...books];

  sortedBooks.sort((a, b) => {

    // Ascending order
    if (asc) {
      return a[key] > b[key] ? 1 : -1;
    }

    // Descending order
    else {
      return a[key] < b[key] ? 1 : -1;
    }

  });
  return sortedBooks;
}

// TASK 4
function countGenres(books) {
  let genresCount = {};

  for (let i = 0; i < books.length; i++) {

    // Loop through each genre inside the current book
    for (let j = 0; j < books[i].genres.length; j++) {

      let genre = books[i].genres[j];
      // If genre already exists → increase count
      if (genresCount[genre]) {
        genresCount[genre]++;
      }
      // If genre does not exist → start with 1
      else {
        genresCount[genre] = 1;
      }
    }
  }
  return genresCount;
}

// TASK 5
function groupByAuthor(books) {
  let authors = {};

  // Loop through all books
  for (let i = 0; i < books.length; i++) {

    let author = books[i].author;
    // If author does not exist yet
    if (!authors[author]) {
      authors[author] = [];
    }
    // Add the current book to the author's array
    authors[author].push(books[i]);
  }
  return authors;
}


// TASK 6
function hasHighlyRated(books, threshold) {

    for (let i = 0; i < books.length; i++) {

    // Check if rating is greater than or equal to threshold
    if (books[i].rating >= threshold) {
      return true;
    }
  }
  return false;
}

// TASK 7
function allBeforeYear(books, year) {

  for (let i = 0; i < books.length; i++) {

    // Check if any book year is greater than or equal to the given year
    if (books[i].year >= year) {
      return false;
    }
  }
  // If all books are before the year
  return true;
}

// TASK 8
function findByTitle(books, title) {

  for (let i = 0; i < books.length; i++) {

    // Check if the title matches exactly
    if (books[i].title === title) {
      return books[i];
    }
  }
  return undefined;
}

// BONUS 1 — Tag Classics
function tagClassics(books) {

  let updatedBooks = [];

  for (let i = 0; i < books.length; i++) {

    let newBook = {

      // Copy all original properties
      ...books[i],

      // Add new property
      isClassic: books[i].year < 1950
    };

    // Add updated book to new array
    updatedBooks.push(newBook);
  }
  return updatedBooks;
}

// BONUS 2 — Dystopian Titles List
function getDystopianTitles(books) {

  let dystopianTitles = [];
  for (let i = 0; i < books.length; i++) {

    if (books[i].genres.includes("Dystopian")) {
      dystopianTitles.push(books[i].title);
    }
  }
  // Sort titles alphabetically
  dystopianTitles.sort();
  return dystopianTitles;
}


// BONUS 3 — Keyword Search
function hasKeyword(books, keyword) {

  for (let i = 0; i < books.length; i++) {

    // Convert title and keyword to lowercase
    // to make the search case-insensitive
    let title = books[i].title.toLowerCase();
    let searchWord = keyword.toLowerCase();

    // Check if title contains the keyword
    if (title.includes(searchWord)) {
      return true;
    }
  }
  return false;
}


// Example Outputs
console.log(getRecentBooks(books, 1950));

console.log(getAverageRating(books));

console.log(sortBooksBy(books, "year"));

console.log(countGenres(books));

console.log(groupByAuthor(books));

console.log(hasHighlyRated(books, 4.8));

console.log(allBeforeYear(books, 2010));

console.log(findByTitle(books, "Dune"));

console.log(tagClassics(books));

console.log(getDystopianTitles(books));

console.log(hasKeyword(books, "road"));