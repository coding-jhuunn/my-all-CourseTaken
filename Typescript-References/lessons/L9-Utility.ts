
//partial
interface Assignment{
    studentId:string,
    title:string,
    grade:number,
    verified?:boolean
}

const assignOne:Assignment={
    studentId:"Name",
    title:"Index",
    grade:94
}
const updateAssign =(assign:Assignment, Props:Partial<Assignment>):Assignment => {
    return {...assign,...Props}
}


console.log(updateAssign(assignOne,{grade:74}));

const assignGraded:Assignment =updateAssign(assignOne,{grade:95});


//Required and Readonly

const requiredAssign = (assign:Required<Assignment>):Assignment=>{
    return assign;
}
const assignVerified:Readonly<Assignment> ={...assignGraded,verified:true }

requiredAssign({...assignGraded,verified:false})

//Record

type Students = "Anne"|"Mary";

type Grade = "A"|"B"|"C"|"D"|"U";

const finalGrades: Record<Students,Grade>={
    Anne:"A",
    Mary:"C"
}

interface Grades{
    assign1:number,
    assign2:number
}

const gradeData:Record<Students,Grades>={
    Anne:{assign1:23,assign2:24},
    Mary:{assign1:25,assign2:78}
}



//Pick and Omit
type AssignResult = Pick <Assignment,"studentId"|"grade">;

const score:AssignResult = {
    studentId:"Name",
    grade:34
}

type AssignPreview = Omit<Assignment,"grade"|"verified">;

const preview:AssignPreview={
    studentId:"k123",
    title:"Final Project"
}

//exclude and extrac 

type adjustedGrade = Exclude<Grade,"U">;

type highGrades = Extract<Grade,"A"|"B">;

//Nonnullable

type allPossibleGrades = 'Dave'|'John'|null|undefined;

type NamesOnly = NonNullable<allPossibleGrades>;

//Return type
const createNewAssign = (title:string,grade:number)=>{
    return {title,grade}
}
type newAssign = ReturnType< typeof createNewAssign>;

const tsAssign: newAssign =createNewAssign("Nice",69);
console.log(tsAssign);

//Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs:AssignParams = ["New",100];

const tsAssign2:newAssign =createNewAssign(...assignArgs);
