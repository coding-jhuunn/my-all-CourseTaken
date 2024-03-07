class Coder {
    constructor(
            public  readonly name:string,
            public music:string,
            private age:number,
            protected lang:string = "Python"
        ){
            this.name = name,
            this.music = music,
            this.age =age,
            this.lang = lang
        }
        getAge(){
            console.log(`Hey my age is ${this.age}`);
        }
    
}

let Dave = new Coder("Dave","Rock",23)
console.log(Dave);
console.log(Dave.getAge())


class WebDev extends Coder{
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number
    ){
        super(name,music,age)
        this.computer = computer;
    }
    public getLang(){
        return `I write ${this.lang}`;
    }
}

interface Musican{
    name:string,
    instrument:string,
    play(action:string):string
}


class Guitarist implements Musican{
    name:string
    instrument: string
    constructor(name:string, instrument:string) {
        this.name = name
        this.instrument = instrument
    }
    play(action:string){
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
let carl = new Guitarist("carl","bass");
console.log(carl.play("rock"));


class Peeps{
    static count:number =0;

    static getCount ():number{
        return Peeps.count;
    }

    public id:number

    constructor(public name:string){
        this.name=name;
        this.id=++Peeps.count;
    }
}
const A = new Peeps("A")
const B = new Peeps("B")
const C = new Peeps("C")
console.log(Peeps.count);

class Bands{
    private dataState:string[];
    constructor(){
        this.dataState = [];
    }
    public get data():string[]{
        return this.dataState;
    }
    public set data(value:string[]){
        if(Array.isArray(value)&& value.every(el=>
            typeof el ==='string'
        ))  {
            this.dataState = value
            return
        }
        else{
            throw new Error(" ERROR");
            
        }
    }
}

const newBand = new Bands();

newBand.data = ["abc" , "2" , "3"]
