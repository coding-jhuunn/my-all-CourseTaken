const {readFile,readFileSync} = require('fs');

//sync block execute this first before the others
// const txt= readFileSync('./FireShipNodeRef/hello.txt','utf8');
// console.log(txt);


//unsych 
readFile('./FireShipNodeRef/hello.txt','utf8',(err,txt)=>{
    console.log(txt)
});


console.log("Do this ASAP")