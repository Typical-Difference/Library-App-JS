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
    const newBook = new Book(title, author);
    library.add(newBook);
}

//loop through the array and display each book
function displayAll(library){
    for(let serialno = 1; serialno <= library.length; serialno++){
        let authorname = library[serialno].author;
        let booktitle = library[serialno].title;
        let bookpages = library[serialno].pages;
        let bookread = library[serialno].read;
    }
}