//Parent Node Traversak
let ul = document.querySelector("ul");
//to find the parent of a child element
console.log(ul.parentElement);
console.log(ul.parentNode);
//to find the grandparent of a child element
console.log(ul.parentElement.parentElement);
console.log(ul.parentNode.parentNode);

//Child Node Traversal
let list = document.querySelector("ul");
console.log(list.childNodes);
console.log(list.firstChild);
console.log(list.lastChild);
list.childNodes[1].style.backgroundColor = "green";
console.log(list.childNodes[1].innerText);
console.log(list.children);

//Siblings Node Traversal
let listSiblings = document.querySelector("ul");
console.log(listSiblings);
const div = document.querySelector("div");

console.log(div.childNodes);
console.log(listSiblings.previousElementSibling);
console.log(listSiblings.nextElementSibling);
