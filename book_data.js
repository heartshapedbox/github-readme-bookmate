// url = https://bookmate.com/@babenkodmitry/books/all

const container = document.getElementsByClassName("book book_grid  book_88")[0];
const status = container.querySelector("span").innerText;
const cover = container.querySelector("img").getAttribute("src");
const title = container.querySelector("a").getAttribute("title");
const author = container.querySelector("img").getAttribute("alt").split(", ")[1];
const url = "https://bookmate.com" + container.querySelector("a").getAttribute("href");

headers = ["Progress","Cover","Title","Author","Read"]
bookAttributes = [status,cover,title,author,url];
bookData = {};
for (var i = 0; i < headers.length; i++) {
  bookData[headers[i]] = bookAttributes[i]
};
console.log(bookData)
