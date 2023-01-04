export{}
function fullName(person: {
    firstName:string , lastName :string
}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bharath',
    lastName : 'Surya'
};

fullName(p);

//Interface of person object

interface Person {
    firstName:string;
    lastName?:string; //optional property
    age : number;
    location : string;
}

function details(person : Person){
    console.log(
        `I am ${person.firstName} ${person.lastName}.I am ${person.age}yrs old.I live in ${person.location} `);
}

let user = {
    firstName:'Bharath',
    lastName:'Surya',
    age : 26,
    location : 'Bangalore',
};

details(user);

//Class

class Employee {
     public employeeName : string;
    //  private employeeName : string;
    //  protected employeeName : string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet (){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let employeeNew =  new Employee ('Bharath');
console.log(employeeNew.employeeName);
employeeNew.greet()

class Manager extends Employee {
    constructor (managername: string){
        super(managername);
    }

    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`);
    }
}

let m1 = new Manager('Karthik')
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//Access modifiers public- accessed anywhere; private - accessed only inside the containing class not even in the derived class; protected - accessed within a container and derived class



