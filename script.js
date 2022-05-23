// const container = document.getElementsByClassName("book book_grid  book_88")[0];
// const status = container.querySelector("span").innerText;
// const cover = container.querySelector("img").getAttribute("src");
// const title = container.querySelector("a").getAttribute("title");
// const author = container.querySelector("img").getAttribute("alt").split(", ")[1];
// const url = "https://bookmate.com" + container.querySelector("a").getAttribute("href");
// const excerption = document.getElementsByClassName("tni")[2].innerText;
//
// headers = ["title","author","progress","cover","url","excerption"]
// book_attributes = [title,author,status,cover,url,excerption];
// book_data = {};
// for (var i = 0; i < headers.length; i++) {
//   book_data[headers[i]] = book_attributes[i]
// };
//
// console.log(book_data)

book_data = {
  title: 'To Sleep in a Sea of Stars',
  author: 'Christopher Paolini',
  progress: '8%',
  cover: 'https://assets1.bmstatic.com/assets/books-covers/97/5c/ipad-e5265287f0737e5e462bb046bc663305.jpeg',
  url: 'https://bookmate.com/reader/saTDRM1P?resource=book',
  excerption: 'Kira fell to the floor, screaming. The pain was all-consuming. That much she was aware of. It was the only thing she was aware of.'
}

var book_title = document.querySelector('.header_container');
var book_author = document.querySelector('.author_container');
var book_excerption = document.querySelector('.text_container');
var book_progress = document.querySelector('.progress_container');
var book_cover = document.querySelector('.cover_container');
var quote = document.querySelector('.quote');
var img = document.createElement("img");
img.src = book_data["cover"];

book_title.textContent = book_data["title"];
book_author.textContent = (`by ${book_data["author"]}`);
book_progress.textContent = book_data["progress"];
book_excerption.textContent = (`\xa0\xa0\xa0\xa0\xa0\ ${book_data["excerption"]}`);
quote.textContent = "”";
book_cover.appendChild(img);
