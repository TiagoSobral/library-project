
// DOM CREATION & SELECTION ELEMENTS
const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");

table.setAttribute("style", "display: none");



// LIBRARY ARRAY
const myLibrary = [];

// FUNCTIONS

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
};

function addBookToLibrary(name, author) {
    let book = new Book(name, author);
    myLibrary.push(book);
    table.setAttribute("style", "display: visible");
    displayOnPage(myLibrary);
};

function displayOnPage(array) {
    array.forEach( (element) => {
        let bookRow = document.createElement("tr");
        let bookTitle = document.createElement("td");
        let bookAuthor = document.createElement("td");
        let bookId = document.createElement("td");


        bookTitle.textContent = element.title;
        bookAuthor.textContent = element.author;
        bookId.textContent = element.id;

        tableBody.appendChild(bookRow);
        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookId);
    });
};



