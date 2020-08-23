function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
};

//add book to specific shelf
function addBook(library,book) {
  library.shelves[book.genre].push(book);
};

//check if the book is available on shelves at Library
//create for loop to check availibility

function checkoutBook(library, checkedBook) {
  for (var i = 0; i < library.shelves.fantasy.length; i++) {
    if (library.shelves.fantasy[i].title.includes(checkedBook)) {
      library.shelves.fantasy.splice(i, 1);
      return `You have now checked out ${checkedBook} from the ${library.name}`;
    }
  for (var i = 0; i < library.shelves.fiction.length; i++)
    if (library.shelves.fiction[i].title.includes(checkedBook)) {
      library.shelves.fiction.splice(i, 1);
      return `You have now checked out ${checkedBook} from the ${library.name}`;
    }
  for (var i = 0; i < library.shelves.nonFiction.length; i++)
    if (library.shelves.nonFiction[i].title.includes(checkedBook)) {
      library.shelves.nonFiction.splice(i, 1);
      return `You have now checked out ${checkedBook} from the ${library.name}`;
  }
}
  return `Sorry, there are currently no copies of ${checkedBook} available at the ${library.name}`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
