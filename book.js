// eslint-disable-next-line prefer-const
let myLibrary = [];
const button = document.querySelector("button");
const div = document.querySelector("div");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Enter the title of the book:");
  const author = prompt("Enter the author of the book:");
  const pages = prompt("Enter the number of pages in the book:");
  const read = prompt("Have you read this book?");

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  const e = document.createElement("div");
  e.innerHTML = `${title} by ${author}, ${pages} pages, ${read}`;
  div.appendChild(e);
}

button.addEventListener("click", addBookToLibrary);
