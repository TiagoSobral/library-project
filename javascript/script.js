
// DOM CREATION & SELECTION ELEMENTS
const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");

table.setAttribute("style", "display: none");



// LIBRARY ARRAY
const myLibrary = [];

// FUNCTIONS

function Book(title, author, pages, readBook) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.pages = pages;
    this.readBook = readBook;
};

function addBookToLibrary(name, author, pages, readBook) {
    let book = new Book(name, author, pages, readBook);
    myLibrary.push(book);
    table.setAttribute("style", "display: visible");
    displayOnPage(myLibrary);
};

function displayOnPage(array) {
    
    const bookRow = document.createElement("tr");
    const bookTitle = document.createElement("td");
    const bookAuthor = document.createElement("td");
    const bookPages = document.createElement("td");
    const bookWasRead = document.createElement("td");

    bookRow.setAttribute("id", crypto.randomUUID());

    array.forEach( (element) => {
        bookTitle.textContent = element.title;
        bookAuthor.textContent = element.author;
        bookPages.textContent = element.pages;
        bookWasRead.textContent = element.readBook;
    });

    tableBody.appendChild(bookRow);
    bookRow.appendChild(bookTitle);
    bookRow.appendChild(bookAuthor);
    bookRow.appendChild(bookPages);
    bookRow.appendChild(bookWasRead);
};

// DIALOG SECTION
const dialog = document.querySelector("dialog");
const form = document.querySelector(".add-book-form");
const btnNewBook = document.querySelector(".btn-new-book");
const btnCancel = document.querySelector(".btn-cancel-form");
const btnSubmit = document.querySelector(".btn-submit-form");

const inputTitle = document.querySelector("#book-title");
const inputAuthor = document.querySelector("#book-author");
const inputPages = document.querySelector("#book-pages");
const inputWasRead = document.querySelector("input[name='book-was-read']");

btnNewBook.addEventListener("click", () => {
    dialog.showModal();
});

btnSubmit.addEventListener("click", (event)=> {
    event.preventDefault()
    dialog.close();
})

dialog.addEventListener("close", ()=> {
    addBookToLibrary(
        inputTitle.value, 
        inputAuthor.value, 
        inputPages.value, 
        inputWasRead.value);
    
});




