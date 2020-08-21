function createTitle(bookTitle) {
  return "The " + bookTitle;
}

function buildMainCharacter() {
  var ghoulCharacter = {name: "Vassya", age: 16, pronouns: "she/her"};
  return ghoulCharacter;
}

function saveReview(newReview, reviews) {
  if (!reviews.includes(newReview)) {
    reviews.push(newReview);
  }
  return reviews;
}

function calculatePageCount(bookTitle) {
  return (bookTitle.length * 20);
}

function writeBook(bookTitle, bookCharacter, genre){
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  return book;
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * 0.75;
  return bookTitle.pageCount;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
