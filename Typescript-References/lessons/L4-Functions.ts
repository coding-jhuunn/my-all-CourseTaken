//Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?:string,
    active:boolean,
    albums:(string|number)[]
}

type UserID = stringOrNumber;

//Literal Types

let myName:'Dave';

let usename:'Dave'|'John'|'Amy';

//functions 

const add = (a:number,b:number):number=>{
    return a + b;
}

const logMsg= (message:any):void=>{
    console.log(message);
}

logMsg('Hello');
logMsg(add(2,3));


let subs = function (a:number,b:number):
number{
    return a-b;
}

//tyle aliases for function

type mathFunction = (a:number,b:number)=>number;

//same but interface instead of type
// interface mathFunction { 
//     (a:number,b:number):number
// }
let multiply:mathFunction = function(a,b){
    return a*b;
}


//optional parameters

const addAll = (a:number,b:number,c?:number):
number=>{
    if(c!==undefined){
        return a+b+c;
    }
    return a+b;
}
//default param value

const sumAll = (a:number,b:number,c:number=2):
number=>{
   
    return a+b+c;

}

logMsg(addAll(1,2,3));

//Rest Parameters

const total = (a:number,...nums:number[]):number=>{
    return a+nums.reduce((prev,curr)=>
        prev+curr
    )
}

logMsg(total(1,2,3));

//never type

const infinite = ()=>{
    let i:number =1;
    while (true){
        i++;
        if(i>100)break;
    }
}

//custome type guard

const isNumber = (value:any):boolean=>{
    return typeof value === 'number'?true:false;
}

//another ex of never type

const numberOrString = (value:number|string):
string=>{
   
    if (isNumber(value))
        {return 'number'
    }
    else{
        return ("string")
    }
   
}

console.log(numberOrString(2));