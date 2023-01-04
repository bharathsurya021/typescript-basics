"use strict";
exports.__esModule = true;
//if export is not added it'll treat this file as a script
var message = 'welcome back';
console.log(message);
// Variable Declarations
//can declared without intialization
var x = 20;
var sum;
//only declared along intialization with a value  and can't be reassigned
var y = 30;
// const title; 
// y=40;
var title = 'Typescript Tutorial';
//cannot redeclare x
// let x=30;
//variable types
var isBeginner = true;
var total = 0;
var name = 'Bharath';
// name = true; //error type string is assigned to boolean type
var sentence = "My name is ".concat(name, "\nI am a beginner in TypeScript");
console.log(sentence);
//inellisense & static type checking- coz we assigned type to the variables
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//mix of types- typescript provides tuple type (order sensitive)
var person1 = ['Surya', 2];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
;
var c = Color.Green;
var d = Color1.Green;
console.log(c);
console.log(d);
//Any type allows us to re-assign
var randomvalue = 10;
randomvalue = true;
randomvalue = 'Bharath';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
var myVariable1 = 10;
if (hasName(myVariable1)) {
    //  console.log(myVariable1.name)   
}
//error: unknown type variable can assign to any type value but cannot access any properties/call/construct them
// console.log(myVariable1.name); 
//type asertion/casting- variable treated as string in this case
// (myVariable1 as String).toUpperCase(); 
//Type Inference
//optional type notation
var a;
a = 10;
a = true;
var b = 20;
// we didn't specify type of b but typescript inferenced type of variable b
// b = true; //error
//Union types - restricted to specified types (used when variable is not in your control)
var multiType;
//any type has no restrictions can be assigned to any value type
var anyType;
anyType = 20;
anyType = true;
