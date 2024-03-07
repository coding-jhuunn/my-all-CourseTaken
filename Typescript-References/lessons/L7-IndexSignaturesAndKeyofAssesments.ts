
// interface TransactionObj{
//     readonly[index:string]:number
// }

interface TransactionObj{
    readonly[index:string]:number
     Pizza:number,
     Books:number,
     Job:number
 
 }
 
 const todayTransactions: TransactionObj={
     Pizza:-10,
     Books:-5,
     Job:50
 }
 
 const todayNet=(transactions:TransactionObj):number =>{
     let total = 0
     for(const index in transactions){
         total += transactions[index]
     }
     return total
 };
 
 const indexPizza:string = "Pizza";
 
 // console.log(todayTransactions[indexPizza]);
 
 // console.log(todayNet(todayTransactions));
 
 //////////////////////////////
 
 interface Student{
     // [key:string]:string|number|number[]|undefined
     
     name:string,
     GPA:number,
     classes?:number[]
 }
 
 const newStudent:Student ={
     name:"asd",
     GPA:1,
     classes:[123,123]
 }
 
 //console.log(newStudent.test);
 
 for(const key in newStudent){
     //use askey of object if [key index] is not available
     console.log(`${key}: ${newStudent[key as keyof Student]}`)
 }
 
 Object.keys(newStudent).map(key=>{
     console.log(newStudent[key as keyof typeof newStudent]);
 })
 
 const logInfo = (student: Student,key:keyof Student)=>{
     return (`Student ${key}: ${student[key]}`)
 }
 
 console.log(logInfo(newStudent,"name"));
 
 
 type Streams = 'salary'|'bonus'|'sidehustle';
 
 type Incomes = Record<Streams, string| number >
 
 const monthlyIncomes :Incomes ={
     salary:500,
     bonus:100,
     sidehustle:200
 }
 
 for (const  revenue in monthlyIncomes){
     console.log(monthlyIncomes[revenue as keyof Incomes]);
 }