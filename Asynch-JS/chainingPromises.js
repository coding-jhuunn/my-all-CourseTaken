const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/a.json")
  .then((data) => {
    console.log("promise 1", data);
    return getTodos("todos/b.json");
  })
  .then((data) => {
    console.log("promise 2", data);
    return getTodos("todos/c.json");
  })
  .then((data) => {
    console.log("promise 3", data);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
