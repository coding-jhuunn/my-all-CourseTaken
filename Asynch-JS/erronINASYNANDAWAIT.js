const getTodos = async () => {
  const response = await fetch("todos/a.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = response.json();
  return data;
};

getTodos().then((data) => console.log("resolved", data));
