// put the endpoints
// is just like promise, resolve and reject
// it only reject if there is no connection available
// if the endpoint is mistype then will be still resolved output
fetch("todos/a.json")
  .then((response) => {
    console.log("resolve", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
