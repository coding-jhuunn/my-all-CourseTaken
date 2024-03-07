let stringArr = ['one','hey','Dave'];

let guitars= ['Strat','Les Paul',5180];

let mixedData = ['EVH',1984,true];

stringArr[0]='John';
stringArr.push('hey');

guitars[0]=1984;
guitars.unshift('John');



let bands:string[]=[];
bands.push('Van Halen');

//Tuple

let myTuple:[string,number,boolean]=['Dave',42,true];

let mixed = ['John',1,false];



//objects

let myObj:object;
myObj=[];
console.log(typeof myObj);
myObj=bands;
myObj={};

const exampleObj ={
    prop1:'Dave',
    prop2: true
}

interface Guitarist {
    name?:string,
    active:boolean,
    albums:(string|number)[]
}
//add ? to the prop to make it undefined
let evh: Guitarist={
   
    active:false,
    albums:[123,123,"asd"]

}

let jp: Guitarist={
    name:"Eddie",
    active:false,
    albums:[123,123,"asd"]

}

const greetGutiarist = (guitarist:Guitarist)=>{
    if(guitarist.name){
        return `Hello ${guitarist.name}!`;
    }
    return `HELLO THERE`;
}

console.log(greetGutiarist(evh));
