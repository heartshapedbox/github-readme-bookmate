// url = https://bookmate.com/@babenkodmitry/books/all

var container = document.getElementsByClassName("book book_grid  book_88")[0];
var status = container.querySelector("span").innerText;
var cover = container.querySelector("img").getAttribute("src");
var title = container.querySelector("a").getAttribute("title");
var author = container.querySelector("img").getAttribute("alt").split(", ")[1];
var url = "https://bookmate.com" + container.querySelector("a").getAttribute("href");

headers = ["Progress","Cover","Title","Author","Read"]
bookAttributes = [status,cover,title,author,url];
bookData = {};
for (var i = 0; i < headers.length; i++) {
  bookData[headers[i]] = bookAttributes[i]
};
console.log(bookData)
