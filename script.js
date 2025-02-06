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

    for(let iter = 0; iter < library.length; iter++){
        let book = library[iter];
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        container.appendChild(bookCard);

        let authorName = document.createElement('h3');
        authorName.textContent = book.author;
        bookCard.appendChild(authorName);

        let bookTitle = document.createElement('p');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);

        let bookPages = document.createElement('p');
        bookPages.textContent = book.pages;
        bookCard.appendChild(bookPages);

        let bookRead = document.createElement('p');
        bookRead.textContent = book.read;
        bookCard.appendChild(bookRead);
    }
}

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
table.appendChild(tableBody);

const row1 = document.createElement('tr');
tableBody.appendChild(row1);

const row2 = document.createElement('tr');
tableBody.appendChild(row2);

displayAll(library);