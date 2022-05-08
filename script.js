// const container = document.getElementsByClassName("book book_grid  book_88")[0];
// const status = container.querySelector("span").innerText;
// const cover = container.querySelector("img").getAttribute("src");
// const title = container.querySelector("a").getAttribute("title");
// const author = container.querySelector("img").getAttribute("alt").split(", ")[1];
// const url = "https://bookmate.com" + container.querySelector("a").getAttribute("href");
// const excerption = document.getElementsByClassName("tni")[2].innerText;
//
// headers = ["Title","Author","Progress","Cover","Url","Excerption"]
// bookAttributes = [title,author,status,cover,url,excerption];
// bookData = {};
// for (var i = 0; i < headers.length; i++) {
//   bookData[headers[i]] = bookAttributes[i]
// };
//
// console.log(bookData)

bookData = {
  Title: 'To Sleep in a Sea of Stars',
  Author: 'Christopher Paolini',
  Progress: '8%',
  Cover: 'https://assets1.bmstatic.com/assets/books-covers/97/5c/ipad-e5265287f0737e5e462bb046bc663305.jpeg',
  Url: 'https://bookmate.com/reader/saTDRM1P?resource=book',
  Excerption: 'Kira fell to the floor, screaming. The pain was all-consuming. That much she was aware of. It was the only thing she was aware of.'
}

var bookTitle = document.querySelector('.header_container');
var bookAuthor = document.querySelector('.author_container');
var bookExcerption = document.querySelector('.text_container');
var bookProgress = document.querySelector('.progress_container');
var bookCover = document.querySelector('.cover_container');
var quote = document.querySelector('.quote');
var img = document.createElement("img");
img.src = bookData["Cover"];

bookTitle.textContent = bookData["Title"];
bookAuthor.textContent = (`by ${bookData["Author"]}`);
bookProgress.textContent = bookData["Progress"];
bookExcerption.textContent = (`\xa0\xa0\xa0\xa0\xa0\ ${bookData["Excerption"]}`);
quote.textContent = "”";
bookCover.appendChild(img);
