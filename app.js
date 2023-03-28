function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// eslint-disable-next-line func-names
Books.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', 300, 'not read yet');
// eslint-disable-next-line no-console
console.log(theHobbit.info());
