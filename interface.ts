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
