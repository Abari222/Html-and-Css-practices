const data = [
  {
  id: 1,
  title: "The Lord of the Rings",
  publicationDate: "1954-07-29",
  author: "J. R. R. Tolkien",
  genres: [
    "fantasy",
    "high-fantasy",
    "adventure",
    "fiction",
    "novels",
    "literature",
  ],
  hasMovieAdaptation: true,
  pages: 1216,
  translations: {
    spanish: "El senor de los anillos",
    chines:"",
    french: "Le seigneur des anneaux",
  },
  reviews: {
    goodreads: {
      rating: 4.52,
      ratingsCount: 630994,
      reviewsCount: 13417,
    },
    librarything: {
      rating: 4.53,
      ratingscount: 47166,
      reviewsCount: 452,
    },
  },
},
{
  id: 2,
  title: "The Cyberiad",
  publicationDate: "1965-01-01",
  author: "Stanislaw Lem",
  genres: [
    "science fiction",
    "humor",
    "speculative fiction",
    "short stories",
    "fantasy",
  ],
  hasMovieAdaptation: false,
  pages: 295,
  translations: {},
  reviews: {
    goodreads: {
      rating: 4.16,
      ratingsCount: 11663,
      reviewsCount: 812,
    },
    librarything: {
      rating: 4.13,
      ratingscount: 2434,
      reviewsCount: 0,
    },
  },
},
{
  id: 3,
  title: "Dune",
  publicationDate: "1965-01-01",
  author: "Frank Herbert",
  genres: [
    "science fiction",
    "novel",
    "adventure",
  ],
  hasMovieAdaptation: true,
  pages: 658,
  translations: {
    spanish: "",
  },
  reviews: {
    goodreads: {
      rating: 4.25,
      ratingsCount: 1142893,
      reviewsCount: 49701,
    },
  },
},
{
  id: 4,
  title: "Harry Potter and the Philosopher's Stone",
  publicationDate: "1997-06-26",
  author: "J. K. Rowling",
  genres: [
    "fantasy",
    "adventure",
  ],
  hasMovieAdaptation: true,
  pages: 223,
  translations: {
    spanish: "Harry Potter y la piedra filosofal",
    korean:"",
    bengali: "",
    portuguese: "Harry Potter e a pedra filosofal",
  },
  reviews: {
    goodreads: {
      rating: 4.47,
      ratingsCount: 8910059,
      reviewsCount: 140625,
    },
    librarything: {
      rating: 4.29,
      ratingscount: 120941,
      reviewsCount: 1960,
    },
  },
},
{
  id: 5,
  title: "A Game of Thrones",
  publicationDate: "1996-08-01",
  author: "George. R. R. Martin",
  genres: [
    "fantasy",
    "high-fantasy",
    "fantasy fiction",
    "novels",
  ],
  hasMovieAdaptation: true,
  pages: 835,
  translations: {
    korean: "",
    polish:"Gra o tron",
    portuguese: "A Guerra dos Tronos",
    spanish: "Juego de tronos",
  },
  reviews: {
    goodreads: {
      rating: 4.44,
      ratingsCount: 38358,
      reviewsCount: 1095,
    },
  },
},
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
// Destructuring //


const book = getBook(3);
book;
// const title = book.title;
// const author = book.aurhor;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(author, title, genres);

// Destructing on array//
// const primaryGenres = genres[0]
// const secondaryGenres = genres[1]

// Using Destructuring//
// const [primaryGenres, secondaryGenres] = genres;
// console.log(primaryGenres, secondaryGenres);


// Rest and spread operator//
// const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
// console.log(primaryGenres, secondaryGenres, otherGenres);

// spread operator//
const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
console.log(primaryGenres, secondaryGenres, otherGenres);

// const newGenres = [...genres, "epic fantansy"];
// newGenres;

const newGenres = ["epic fantansy", ...genres];
newGenres;

//Object//
const updatedBook = {...book, 

  //Adding a new property//
  moviePublicationDate: "2001-12-19", 

  //Overwriting an existing property//
  pages: 1210
};
updatedBook;

//Template literals//

// const summary = `a book`;
// summary; 
// Arrow functions//

// function getYear(str) {
//   return str.split("-"[0]);
// }

//Arrow function(str) => str.split("-")[0]//

// const getYear = (str) => {
  
//   return str.split("-")[0]}

const getYear = (str) => str.split("-")[0]

console.log(getYear(publicationDate));

const summary = `${title},  ${pages}-page long book, was written by ${author} and published in ${getYear(publicationDate)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// Ternaries instead of if/else statements//

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);


// Short-Circuiting and LOgical Operators//

console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && 'This book has a movie')

//falsy: 0, ', null, undefind//
console.log ('jonas' && "some string");
console.log (0 && "some string");

//or//
console.log(true || "some string");
console.log(false || "some string");


console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount)
// const countWrong = book.reviews.librarything.reviewsCount || 'no data';
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// Optional chaining operators//

function getTotalReviewCount(book){
 const goodreads = book.reviews?.goodreads?.reviewsCount;
 const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
 return goodreads + librarything;
}
console.log(getTotalReviewCount(book));