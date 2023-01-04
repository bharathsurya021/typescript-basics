//treat the file as a module(own scope) rather than script which shares global scope
export{} 
//if export is not added it'll treat this file as a script
let message  = 'welcome back'; 
console.log(message);

// Variable Declarations

//can declared without intialization
let x = 20;
let sum;
//only declared along intialization with a value  and can't be reassigned
const y = 30;
// const title; 
// y=40;
const title = 'Typescript Tutorial'

//cannot redeclare x
// let x=30;

//variable types

let isBeginner:Boolean = true;
let total : Number = 0 ;
let name :String = 'Bharath';

// name = true; //error type string is assigned to boolean type

let sentence : String = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

//inellisense & static type checking- coz we assigned type to the variables

let n:null = null;
let u:undefined = undefined;

let isNew: any = null;

let myName : any = undefined;

let list1:number[] = [1,2,3];
let list2:Array<Number> = [1,2,3];

//mix of types- typescript provides tuple type (order sensitive)
let person1:[String,Number] = ['Surya',2];

//Enum

enum Color {Red,Green,Blue};
enum Color1 {Red =5,Green =6,Blue=7};
let c :Color = Color.Green;
let d :Color1 = Color1.Green;
console.log(c);
console.log(d);

//Any type allows us to re-assign
let randomvalue : any = 10;
randomvalue = true;
randomvalue ='Bharath'

let myVariable:any = 10;

function hasName(obj:any): obj is { 
    name :String
}{
    return !!obj &&
         typeof obj === "object" && "name" in obj
}

// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

let myVariable1:unknown = 10;
if (hasName(myVariable1)){
//  console.log(myVariable1.name)   
}


//error: unknown type variable can assign to any type value but cannot access any properties/call/construct them

// console.log(myVariable1.name); 

//type asertion/casting- variable treated as string in this case
// (myVariable1 as String).toUpperCase(); 

//Type Inference
//optional type notation
let a;
a=10;
a=true;

let b = 20;
// we didn't specify type of b but typescript inferenced type of variable b

// b = true; //error

//Union types - restricted to specified types (used when variable is not in your control)
let multiType: Number | Boolean;
//any type has no restrictions can be assigned to any value type
let anyType:any;
anyType =20;
anyType = true;