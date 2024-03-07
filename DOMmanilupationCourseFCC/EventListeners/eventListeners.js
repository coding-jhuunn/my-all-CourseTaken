//DOM Manipulation

//EventListeners
const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", () => {
  alert("click 2");
});

const box3 = document.querySelector(".box-3");

// box3.addEventListener("mouseover", () => {
//   box3.style.backgroundColor = "red";
// });

const rvlBtn = document.querySelector(".reveal-btn");
const content = document.querySelector(".hidden-content");

function revealContent() {
  if (content.classList.contains("reveal-btn")) {
    content.classList.remove("reveal-btn");
  } else {
    content.classList.add("reveal-btn");
  }
  console.log(content.classList);
}
rvlBtn.addEventListener("click", revealContent);
