const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("error", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos("todos/a.json", (err, data) => {
  console.log(data);
  getTodos("todos/b.json", (err, data) => {
    console.log(data);
    getTodos("todos/c.json", (err, data) => {
      console.log(data);
    });
  });
});
