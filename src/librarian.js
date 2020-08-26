var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library, shelf, titleChecked) {
    this.name = name;
    this.library = library;
    this.findBook = searchShelf(shelf, titleChecked);
  }
  greetPatron(patronName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patronName}!`
    } else {
    return `Hello, ${patronName}!`
  }
  }

}

// function searchShelf(shelf, titleChecked) {
//   for (i = 0; i < shelf.length; i++) {
//     if (shelf[i, 1].title == titleChecked){
//     return true;
//   } else {
//     return false;
//   }
//   }
// }

module.exports = Librarian;
