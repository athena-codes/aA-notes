
// Defining JS class;


// Book is the object (begins w/ capital)
class Book {
    // Constructor 'function'
    constructor(title, series, author) {
        // When instantiated, these become instances of 'book' obj
        this.title = title;
        this.series = series;
        this.author = author;
    }
}

console.log(Book.title)  // => Returns undefined b/c obj is not instantiated

// Create an instance of a class using new keyword;
const fellowshipOfTheRing = new Book(
    'The Fellowship of the Ring',
    'The Lord of the Rings',
    'J.R.R. Tolkien');

console.log(fellowshipOfTheRing);



const theLightningTheif = new Book(
    'The Lightning Thief',
    'Percy Jackson & the Olympians',
    'Rick Riordan')

    console.log(theLightningTheif);



    // Defining Methods;
    // typically invoked on a given instance of the class stored in a variable; also called instance methods


    // How to make new instance of an aray
    const list = new Array(1, 5, 3, 9, 11, -3);
    console.log(list.sort());                // [ -3, 1, 11, 3, 5, 9 ]
    console.log(list.sort((a, b) => a - b)); // [ -3, 1, 3, 5, 9, 11 ]

    // getInformation instance method included in book class

    // getInformation() {
    //     return `${this.title} by ${this.author}`;
    // }

    // console.log(fellowshipOfTheRing.getInformation());


// Use the `instanceof` operator to check if the
// `fellowshipOfTheRing` object is an instance of the `Book` class.

console.log(fellowshipOfTheRing instanceof Book);  // returns 'true'
