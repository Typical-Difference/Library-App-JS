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
    for(let iter = 0; iter < library.length; iter++){
        //container.innerHTML = ""; 
        let book = library[iter];
        
        const row = document.createElement('tr');
        tableBody.appendChild(row);

        const d1 = document.createElement('td');
        const d2 = document.createElement('td');
        const d3 = document.createElement('td');
        const d4 = document.createElement('td');

        d1.textContent = book.title;
        d2.textContent = book.author;
        d3.textContent = book.pages;
        d4.textContent = book.read;

        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        row.appendChild(d4);
    }
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

const headers = document.createElement('tr');
thead.appendChild(headers);

const header1 = document.createElement('th');
const header2 = document.createElement('th');
const header3 = document.createElement('th');
const header4 = document.createElement('th');

header1.innerHTML = "<b>Title</b>";
header2.innerHTML = "<b>Author</b>";
header3.innerHTML = "<b>Pages</b>";
header4.innerHTML = "<b>Read</b>";

headers.appendChild(header1);
headers.appendChild(header2);
headers.appendChild(header3);
headers.appendChild(header4);

const tableBody = document.createElement('tbody');
tableBody.id = 'table-body';
table.appendChild(tableBody);

displayAll(library);