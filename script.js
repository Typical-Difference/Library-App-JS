//Books stored in an array
const library = [];

//Constructor for books
function Book(title, author){
    this.title = title;
    this.author = author;
}

//function to create a book and store in array
function addToLibrary(title, author){
    const newBook = new Book(title, author);
    library.add(newBook);
}