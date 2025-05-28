
// DOM CREATION & SELECTION ELEMENTS
const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");

table.setAttribute("style", "display: none");



// LIBRARY ARRAY
const myLibrary = [];

    // Functions

function Book(title, author, pages, readBook) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.pages = pages;
    this.readBook = readBook;
};

Book.prototype.changeReadStatus = function(answer) {
    if (this.readBook !== answer) {
        this.readBook = answer;
    }
}



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
    
    const readStatus = document.createElement("td");
        const btnStatus = document.createElement("div");
        btnStatus.setAttribute("class", "status")
            const statusToggle = document.createElement("div");
            statusToggle.setAttribute("class", "toggle")
        
    const erase = document.createElement("td");
        const btnErase = document.createElement("button");
        btnErase.setAttribute("class", "erase");

    array.forEach( (element) => {
        bookRow.setAttribute("data-id", element.id);
            bookTitle.textContent = element.title;
            bookAuthor.textContent = element.author;
            bookPages.textContent = element.pages;
            bookWasRead.textContent = element.readBook;
            bookWasRead.setAttribute("data-id", element.id); 
            // this one is set to data id to help the prototype
            // function on read status with the dom elements.
    });

    tableBody.appendChild(bookRow);
        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookPages);
        bookRow.appendChild(bookWasRead);
    
    bookRow.appendChild(readStatus);
        readStatus.appendChild(btnStatus);
            btnStatus.appendChild(statusToggle);

    bookRow.appendChild(erase);
        erase.appendChild(btnErase);

};

// DIALOG SECTION

    // Element Creation

const dialog = document.querySelector("dialog");
    const form = document.querySelector(".add-book-form");
        const inputTitle = document.querySelector("#book-title");
        const inputAuthor = document.querySelector("#book-author");
        const inputPages = document.querySelector("#book-pages");
        const inputWasRead = document.querySelectorAll("input[name='book-was-read']");
        
        const btnNewBook = document.querySelector(".btn-new-book");
        const btnCancel = document.querySelector(".btn-cancel-form");
        const btnSubmit = document.querySelector(".btn-submit-form");


    // Event Listeners

btnNewBook.addEventListener("click", () => {
    dialog.showModal();
});

btnSubmit.addEventListener("click", (event)=> {
    event.preventDefault()
    dialog.close(dialog.value);
})

dialog.addEventListener("close", ()=> {
    addBookToLibrary(
        inputTitle.value, 
        inputAuthor.value, 
        inputPages.value,
        wasItRead());
    removeBook();
    toggleAnimation();
}); 

    // Functions

function wasItRead() {
    for (element of inputWasRead) {
        if (element.checked === true) {
            return element.value;
        }
    }
}

function removeBook() {
    const btnsTrash = document.querySelectorAll(".erase");
    
    btnsTrash.forEach((element)=> {
        element.addEventListener("click", ()=> {
            let bookID = element.parentElement.parentElement.dataset.id;
            element.parentElement.parentElement.remove();

            removeFromMyLibraryArray(bookID);

        })
    });
}; 

function removeFromMyLibraryArray(bookID) {
            for (book of myLibrary) {
                if (book.id === bookID) {
                    myLibrary.splice(myLibrary[book],1);
                }
            }
        };

// SHOW LIBRARY

    // Event Listeners
function toggleAnimation() {
    const btnSwitch = document.querySelector(".status");
    const wasReadCell = btnSwitch.parentElement.previousSibling.textContent;
    
    
    if (wasReadCell === "Yes") {
        btnSwitch.classList.toggle("active");
    }

    btnSwitch.addEventListener("click", ()=> {
        if (wasReadCell === "Yes") {
            btnSwitch.classList.remove("active");
            wasReadCell.textContent = "No";
        }
        else {
            btnSwitch.classList.toggle("active");
            wasReadCell.textContent = "Yes";
        }
    })
};


