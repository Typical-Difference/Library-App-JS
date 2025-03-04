//Books stored in an array
const library = [];

//Constructor for books
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const hp = new Book('Harry Potter and the Chamber of secrets', 'J.K Rowling', 342, 'not read');
const bat = new Book('Batman: The Killing Joke', 'John Kler', 234, 'read');
library.push(hp);
library.push(bat);

//function to create a book and store in array
function addToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
}

//loop through the array and display each book
function displayAll(library){
    const container = document.querySelector('#library-container');

    const tableBody = document.querySelector('#table-body');

    tableBody.innerHTML = "";
    
    library.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.pages}</td> <td>${book.read}</td> <td><button data-index=${index} class="remove-button">Remove</button></td>`;
        tableBody.appendChild(row);        
    });
    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener("click", function(event){
            const bookIndex = event.target.getAttribute('data-index');
            library.splice(bookIndex, 1);
            displayAll(library);
        });
    });
}

document.querySelector('#input-form').addEventListener("submit", function(event){
    event.preventDefault(); //Stop page refresh upon reload.
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.querySelector('input[name="book-read"]:checked').value;

    addToLibrary(title, author, pages, read);
    displayAll(library);
    document.querySelector('dialog').close();
    document.getElementById('input-form').reset();
});

document.querySelector('#form-close').addEventListener("click", function(){
    document.querySelector('dialog').close();
});

document.querySelector('#new-book').addEventListener("click", function(){
    document.querySelector('dialog').showModal();
});

const container = document.querySelector('#library-container');

//Create a table with headers
const table = document.createElement('table');
table.border = '1';
container.appendChild(table);
    
const thead = document.createElement('thead');
table.appendChild(thead);
thead.innerHTML = '<tr><td><b>Title</b></td><td><b>Author</b></td><td><b>Pages</b></td><td><b>Read</b></td><td><b>Remove</b></td></tr>'

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tableBody = document.createElement('tbody');
tableBody.id = 'table-body';
table.appendChild(tableBody);

displayAll(library);