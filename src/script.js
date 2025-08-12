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
    const bookCardElement = document.createElement("div");
    bookCardElement.setAttribute("data-book-id", bookLibrary[i].id);
    bookCardElement.className = "book-card";
    document.body.appendChild(bookCardElement);

    const bookTitleElement = document.createElement("p");
    bookTitleElement.innerText = bookLibrary[i].title;
    bookTitleElement.className = "book-title";
    bookCardElement.appendChild(bookTitleElement);

    const bookAuthorElement = document.createElement("p");
    bookAuthorElement.innerText = `by ${bookLibrary[i].author}`;
    bookAuthorElement.className = "book-author";
    bookCardElement.appendChild(bookAuthorElement);

    const bookPagesElement = document.createElement("p");
    bookPagesElement.innerText = `${bookLibrary[i].pages} pages`;
    bookPagesElement.className = "book-pages";
    bookCardElement.appendChild(bookPagesElement);

    const bookStatusElement = document.createElement("p");
    bookStatusElement.innerText = bookLibrary[i].status;
    bookStatusElement.className = "book-status";
    bookCardElement.appendChild(bookStatusElement);
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

displayLibrary();
