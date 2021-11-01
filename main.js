const BookInput = document.querySelector("#nameInput");
const coverInput = document.querySelector("#cover");
const authorInput = document.querySelector("#authorInput");
const startRead = document.querySelector("#start");
const finishRead = document.querySelector("#finish");
const reviewInput = document.querySelector("#review");
const submit = document.querySelector(".submit");
const img = document.querySelector("#img");
let bookName, cover, authorName, start, finish, review;

let books = {};
// let length = Object.keys(books).length + 1;

// books["Book" + length] = new Object();

// console.log(books);
BookInput.addEventListener("change", function () {
  bookName = BookInput.value;
  console.log(bookName);
});
coverInput.addEventListener("change", function () {
  [cover] = coverInput.files;
  if (cover) {
    img.src = URL.createObjectURL(cover);
    img.width = `150`;
    img.height = `150`;
    console.log(img.src);
  }
});
authorInput.addEventListener("change", function () {
  authorName = authorInput.value;
  console.log(authorName);
});
startRead.addEventListener("change", function () {
  start = startRead.value;
  console.log(start);
});
finishRead.addEventListener("change", function () {
  finish = finishRead.value;
  console.log(finish);
});
reviewInput.addEventListener("change", function () {
  review = reviewInput.value;
  console.log(review);
});

submit.addEventListener("click", function () {
  let length = Object.keys(books).length + 1;

  books["Book" + length] = new Object();
  books["Book" + length].bookName = bookName;
  books["Book" + length].cover = cover;
  books["Book" + length].authorName = authorName;
  books["Book" + length].start = start;
  books["Book" + length].finish = finish;
  books["Book" + length].review = review;

  console.log(books);
});
