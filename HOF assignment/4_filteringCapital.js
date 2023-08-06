// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input.The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.


const Books = [

    book1 = {
        name: "Atomic Habits",
        author: "James Clear",
        publication: 2005
    },

    book2 = {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        publication: 2012
    },

    book2 = {
        name: "The Hobbit",
        author: "J.R.R. Tolkien",
        publication: 2020
    },

    book3 = {
        name: "Mindset",
        author: "Carol S. Dweck",
        publication: 2001
    },

]

const filterBooks = Books.filter((book) => {
    if (book.publication < 2010) {
        return book
    }
})

filterBooks.forEach((b) => {
    b.publication = 2010
})

console.log(Books);

