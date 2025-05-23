const myLibrary = [
    "Harry Potter: The Philosopher Stone", 
    "Harry Potter: The Goblet of Fire", 
    "Hunger Games"];

function Book() {
};

function addBookToLibrary() {};

const tableBody = document.querySelector("tbody");

function displayOnPage(array) {
    array.forEach( (element) => {
        let bookRow = document.createElement("tr");
        let bookInfo = document.createElement("td");
        bookInfo.textContent = element;
        tableBody.appendChild(bookRow);
        bookRow.appendChild(bookInfo);
    });
};

displayOnPage(myLibrary);


