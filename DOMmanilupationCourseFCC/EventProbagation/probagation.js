window.addEventListener(
  "click",
  function () {
    console.log("WInodw");
  },
  true
);
document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);
document.querySelector(".box-1").addEventListener(
  "click",
  function () {
    console.log("box1");
  },
  true
);
document.querySelector(".box-2").addEventListener(
  "click",
  function () {
    console.log("box2");
  },
  true
);
document.querySelector(".btn").addEventListener(
  "click",
  function () {
    console.log("btn");
  },
  true
);
