// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let biblio = bookList.slice();
  biblio.push(bookName);
  return biblio;
}

// Change code below this line
function remove(bookList, bookName) {
  let biblio = bookList.slice(); 
  const book_index = biblio.indexOf(bookName);
  if (book_index >= 0) {

    biblio.splice(book_index, 1);
    return biblio;

    // Change code above this line
    }
}