const bookLibrary = [];

function Book(title, author, pages, status) {
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

const bookLibraryContainer = document.createElement("div");
bookLibraryContainer.className = "book-library-container";
document.body.appendChild(bookLibraryContainer);

function displayLibrary() {
  for (let i = 0; i < bookLibrary.length; i++) {
    const bookCardElement = document.createElement("div");
    bookCardElement.setAttribute("data-book-id", bookLibrary[i].id);
    bookCardElement.className = "book-card";
    bookLibraryContainer.appendChild(bookCardElement);

    const titleAndAuthorContainer = document.createElement("div");
    titleAndAuthorContainer.className = "book-title-and-author";
    bookCardElement.appendChild(titleAndAuthorContainer);

    const bookTitleElement = document.createElement("p");
    bookTitleElement.innerText = bookLibrary[i].title;
    bookTitleElement.className = "book-title";
    titleAndAuthorContainer.appendChild(bookTitleElement);

    const bookAuthorElement = document.createElement("p");
    bookAuthorElement.innerText = `by ${bookLibrary[i].author}`;
    bookAuthorElement.className = "book-author";
    titleAndAuthorContainer.appendChild(bookAuthorElement);

    const pagesAndStatusContainer = document.createElement("div");
    pagesAndStatusContainer.className = "book-pages-and-status";
    bookCardElement.appendChild(pagesAndStatusContainer);

    const bookPagesElement = document.createElement("p");
    bookPagesElement.innerText = `${bookLibrary[i].pages} pages`;
    bookPagesElement.className = "book-pages";
    pagesAndStatusContainer.appendChild(bookPagesElement);

    const bookStatusElement = document.createElement("p");
    bookStatusElement.innerText = bookLibrary[i].status;
    bookStatusElement.className = "book-status";
    pagesAndStatusContainer.appendChild(bookStatusElement);
  }
}

const dialog = document.getElementById("add-book-dialog");
const addBookButton = document.getElementById("add-book-button");

const titleDialogInput = document.getElementById("title-dialog-input");
const authorDialogInput = document.getElementById("author-dialog-input");
const pagesDialogInput = document.getElementById("pages-dialog-input");
const statusDialogSelect = document.getElementById("status-dialog-select");

const cancelButton = document.getElementById("cancel-button");
const submitButton = document.getElementById("submit-button");

function openCheck() {
  if (dialog.open) {
    console.log("dialog is open");
  } else {
    console.log("dialog is closed");
  }
}

function showDialog(event) {
  event.preventDefault();
  dialog.showModal();
  openCheck(dialog);
}

function closeDialog(event) {
  event.preventDefault();

  dialog.close();
  openCheck(dialog);
}

function submitDialog(event) {
  event.preventDefault();

  const titleInputValue = titleDialogInput.value;
  const authorInputValue = authorDialogInput.value;
  const pagesInputValue = pagesDialogInput.value;
  const statusSelectValue = statusDialogSelect.value;

  addBookToLibrary(
    titleInputValue,
    authorInputValue,
    pagesInputValue,
    statusSelectValue
  );

  bookLibraryContainer.innerHTML = "";

  console.log("book library inside dialog", bookLibrary);

  dialog.close();

  displayLibrary();

  document.getElementById("add-book-form").reset();

  openCheck(dialog);
}

addBookButton.addEventListener("click", showDialog);
cancelButton.addEventListener("click", closeDialog);
submitButton.addEventListener("click", submitDialog);
