let quotes = [
  {
    name: "A",
    content: "Hello",
  },
  {
    name: "B",
    content: "BBBBBBB",
  },
  ,
  {
    name: "C",
    content: "CCCCCCCC",
  },
  ,
  {
    name: "D",
    content: "DDDDDDDD",
  },
  ,
  {
    name: "E",
    content: "EEEEEEEE",
  },
];

console.log(quotes[1].name);

let content = document.querySelector("#content");
let author = document.querySelector("#author");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  author.innerText = quotes[random].name;
  content.innerHTML = quotes[random].content;
});
