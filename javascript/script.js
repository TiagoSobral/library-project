const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
};

function addBookToLibrary(name, author) {
    let book = new Book(name, author);
    console.log(book)
    myLibrary.push(book);
};

const tableBody = document.querySelector("tbody");

function displayOnPage(array) {
    array.forEach( (element) => {
        let bookRow = document.createElement("tr");
        let bookInfo = document.createElement("td");
        bookInfo.setAttribute("id", crypto.randomUUID())
        bookInfo.textContent = element.value;
        console.log(element.value);
        tableBody.appendChild(bookRow);
        bookRow.appendChild(bookInfo);
    });
};

addBookToLibrary("Pedra Filosofal", "J.K Rowling");
displayOnPage(myLibrary);


