
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
    }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < 2; i++) {
    shelf.splice(1, i);
  }
}

function listTitles(shelf) {
  var shelfTitles = [];
  for (i = 0; i < shelf.length; i++) {
    shelfTitles.push(shelf[i].title);
  }
  return shelfTitles.join(', ');
}

//for loop to compare titleChecked with title on shelf

function searchShelf(shelf, titleChecked) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i, 1].title == titleChecked){
    return true;
  } else {
    return false;
  }
  }
}



module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
