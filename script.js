let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector(".btn");

fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
  .then((response) => {
    return response.json();
  })
  .then((dataObject) => {
    console.log(dataObject.data[0].quoteText);
    console.log(dataObject.data[0].quoteAuthor);
    quote.innerText = dataObject.data[0].quoteText;
    author.innerText = "-" + dataObject.data[0].quoteAuthor;
  });

btn.addEventListener("click", () => {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      return response.json();
    })
    .then((dataObject) => {
      console.log(dataObject.data[0].quoteText);
      console.log(dataObject.data[0].quoteAuthor);
      quote.innerText = dataObject.data[0].quoteText;
      author.innerText = "-" + dataObject.data[0].quoteAuthor;
    });
});
