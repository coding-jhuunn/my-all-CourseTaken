const getTodos = async () => {
  const response = await fetch("todos/a.json");
  const data = response.json();
  return data;
};

console.log(1);
console.log(2);
console.log(3);
getTodos().then((data) => {
  console.log(data);
});
console.log(4);
console.log(5);
