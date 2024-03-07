const fsPromises = require('fs').promises;
const path = require('path');


const fsOps = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf-8')
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'))
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\nNice to meet you')
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf-8')
        console.log(newData)
    }catch(e){
        console.error(e);
    }
}

fsOps();
// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8',(error, data) => {
//     if(error)throw error;
//     console.log(data.toString());
// })
// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you',(error) => {
//     if(error)throw error;
//     console.log('Write completed');

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\nYes it is',(error) => {
//         if(error)throw error;
//         console.log('Append completed');

//         fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(error) => {
//             if(error)throw error;
//             console.log('Rename completed');
//         })
//     })

// })


process.on('uncaughtException', err=>{
    console.log(`There was an error: ${err}`)
    process.exit(1);
})