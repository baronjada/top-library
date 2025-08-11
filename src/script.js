// function Book(type, title, author, pages, status) {
//   if (!new.target) {
//     throw error("You must use the 'new' operator to call the constructor");
//   }

//   this.element = document.createElement(type);
//   this.element.innerText = this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.status = status;
//   this.id = crypto.randomUUID();
//   this.displayBookInfo = function () {
//     return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Status: ${this.status}`;
//   };
// }

function Book(title, author, pages, status) {
  if (!new.target) {
    throw error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
  this.displayBookInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Status: ${this.status}`;
  };
}

const book1 = new Book("Before I Let Go", "Kennedy Ryan", 425, "Read");
const book2 = new Book("Honey & Spice", "Bolu Babalola", 324, "Not Read");
const book3 = new Book(
  "I Will Teach You To Be Rich",
  "Ramit Sethi",
  444,
  "Read"
);

const bookLibrary = [];

const addBook = bookLibrary.push(book1, book2, book3);

console.log(bookLibrary);
