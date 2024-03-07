const titles = document.querySelector("#main-heading");
titles.style.color = "red";
console.log(titles);

const listItems = document.querySelectorAll(".list-items");
listItems.forEach(function (items) {
  items.style.fontSize = "1.5rem";
});
