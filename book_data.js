const container = document.getElementsByClassName("book book_grid  book_88")[0];
const status = container.querySelector("span").innerText;
const cover = container.querySelector("img").getAttribute("src");
const title = container.querySelector("a").getAttribute("title");
const author = container.querySelector("img").getAttribute("alt").split(", ")[1];
const url = "https://bookmate.com" + container.querySelector("a").getAttribute("href");

headers = ["Title","Author","Progress","Cover","Url"]
bookAttributes = [title,author,status,cover,url];
bookData = {};
for (var i = 0; i < headers.length; i++) {
  bookData[headers[i]] = bookAttributes[i]
};

console.log(bookData)

var bookTitle = document.querySelector('.header_container');
var bookAuthor = document.querySelector('.author_container');
var bookExcerption = document.querySelector('.author_container');
var bookProgress = document.querySelector('.progress_container');
var bookCover = document.querySelector('.cover_container');
var img = document.createElement("img");
img.src = bookData["Cover"];

bookTitle.textContent = bookData["Title"];
bookAuthor.textContent = (`by ${bookData["Author"]}`);
bookProgress.textContent = bookData["Progress"];
bookCover.appendChild(img);
