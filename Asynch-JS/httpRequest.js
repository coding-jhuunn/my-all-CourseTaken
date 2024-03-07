const request = new XMLHttpRequest();
/// this is a request object

//if something request change it will output these requests
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    console.log(request.responseText);
    //return the response as text
  }
});

//open method takes two arguments
// first is a string ( GET , POST , PUT)
// second is what the endpoint we want to get data from
//open doesnt request anything, it just setting up the request
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

//use send to literally send
request.send();
