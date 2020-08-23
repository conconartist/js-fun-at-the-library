var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, morning) {
    if (morning === true) {
      return `Good morning, ${patronName}!`
    } else {
    return `Hello, ${patronName}!`;
    }
  }
  findBook() {
    checkoutBook();
    return `Yes, we have ${checkedBook}`
  }
}


module.exports = Librarian;
