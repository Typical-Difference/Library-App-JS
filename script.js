//Books stored in an array
const library = [];

//Constructor for books
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//function to create a book and store in array
function addToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    library.add(newBook);
}

//loop through the array and display each book
function displayAll(library){
    const container = document.querySelector('#library-container');
    container.innerHTML = 'This is the inner content';

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

const hp = new Book('Harry Potter and the Chamber of secrets', 'J.K Rowling', 342, 'not read');
const bat = new Book('Batman: The Killing Joke', 'John Kler', 234, 'read');
library.push(hp);
library.push(bat);
displayAll(library);