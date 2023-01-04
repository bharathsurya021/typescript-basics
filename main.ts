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