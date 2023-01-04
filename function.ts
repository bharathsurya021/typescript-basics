export{}
function add(num1:number,num2:number):number{
    return num1 + num2;
}
console.log(add(10,20));
// console.log(add(10,'20'));

//optional paramters & default paramters
//In TS, every paramter is required by a functions
// variablename ?: typeofvariable -- defines optional parameter

//optional paramteres are always defined after required parameters

function addition(num1:number,num2?:number):number{
    if(num2){

        return num1 + num2;
    }else{
        return num1;
    }
}
console.log(addition(20,20));
console.log(addition(15));

//num2 is the default paramter
function subtraction(num1:number, num2 : number = 10){
    if (num1>num2)
        return num1-num2;
    else
        return `negative output ${num1-num2}`;
}

console.log(subtraction(21));
