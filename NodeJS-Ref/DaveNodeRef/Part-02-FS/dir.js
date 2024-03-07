const { error } = require('console');
const fs = require('fs');

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(error)=>{
        if(error) throw err;
        console.log('Directory created')
    })
}    
if(fs.existsSync('./new')){
    fs.rmdir('./new',(error)=>{
        if(error) throw err;
        console.log('Directory removed')
    })
}    

