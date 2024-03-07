const request = new XMLHttpRequest();
/// this is a request object

//if something request change it will output these requests
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status == 200) {
    console.log(request.responseText);
    //return the response as text
    //200 status code means success and it's come back with the data
    //400 stats code means the request doesn't exist
  } else if (request.readyState === 4) {
    console.log("could not fetch the data");
  }
});

//open method takes two arguments
// first is a string ( GET , POST , PUT)
// second is what the endpoint we want to get data from
//open doesnt request anything, it just setting up the request
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

//use send to literally send
request.send();
