type One = string;
type Two = string|number;
type  Three = 'hello';

let a:One = 'hello';
let b= a as Two;//less specific
let c=  a as Three;//more specific

let d =<One>'world';
let e = <string|number>'world';

const addORConcat = (a:number, b:number,c:'add'|'concat'):number|string =>{
    if(c==='add'){
        return a+b
    }
    return '' + a  + b
}

let myVal:string = addORConcat(2,2,'concat') as string;

//ts see no problem but a string is returned
let nextVal:number = addORConcat(2,2,'concat') as number;

//THE DOM

const img = document.querySelector('img')!;
const myImg = document.getElementById('#img') as HTMLImageElement;

img.src
myImg.src