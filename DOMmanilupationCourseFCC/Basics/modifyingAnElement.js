const ul = document.querySelector("ul");
const li = document.createElement("li");

li.innerText = "DC";
ul.appendChild(li);

//Modifying Attributes and Classes
//Attributes
li.setAttribute("id", "#main-heading");
console.log(li);
li.removeAttribute("id");
console.log(li);
const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));

//ClassList

li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));
li.remove();
