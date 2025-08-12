const bookLibrary = [];

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

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);

  bookLibrary.push(book);
}

function displayLibrary() {
  for (let i = 0; i < bookLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("data-book-id", bookLibrary[i].id);
    bookCard.className = "book-card";
    document.body.appendChild(bookCard);

    const bookTitleElement = document.createElement("p");
    const bookTitleContent = document.createTextNode(bookLibrary[i].title);
    bookTitleElement.appendChild(bookTitleContent);
    bookCard.appendChild(bookTitleElement);
  }
}

const book1 = addBookToLibrary("Before I Let Go", "Kennedy Ryan", 425, "Read");

const book2 = addBookToLibrary(
  "Honey & Spice",
  "Bolu Babalola",
  324,
  "Not Read"
);
const book3 = addBookToLibrary(
  "I Will Teach You To Be Rich",
  "Ramit Sethi",
  444,
  "Read"
);

console.log(bookLibrary);

displayLibrary();
