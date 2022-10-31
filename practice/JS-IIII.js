const person ={
    name: 'Mark',
    surname: 'Catanneo',
    age: 22,
    email: 'jpboada@gmail.com',
    religion: 'Atheist',
    nationality: 'Swiss',
    hobbies: ['Tennis', 'Study', 'Dance', 'sex', 'meditation'],
    married : false,
    contact: {
        email: 'juanpabloboao@gmail.com',
        twitter: '@juampi.boa',
        movile: 1162000322,
    },
    saludar: function (){
        console.log ('hola ' + this.name); //--> use this for accessing a variable local value (local scope). When you dont want to use a global value, or when you dont want access to global scope. THIS is pointing to person object (local scope)
    },
    obj2 : {
        name: 'Carlos',
        surname: 'Alcaraz',
        age: 33,
        married: true
    }
}

person.saludar();

// Adding properties
let ciudad = 'Buenos Aires';
let favouriteColor = 'yellow';
let favDj= 'Hernan Catanneo';
person.favDj = favDj;
person.ciudad = ciudad; 
person[ciudad] = ciudad;
person.favouriteColor = favouriteColor;



//Reassigning properties
person.ciudad = 'Uruguay';
person.email = 'boablock@gmail.com';

// Deleting properties/keys 
// delete person.religion;
// delete person.age;
delete person.favouriteColor;

// Accessing to objetct  properties/keys
console.log(person.nationality);
console.log(person.married);
console.log(person.contact.twitter);
console.log ( person.hobbies[0]); //Tennis; 
console.log(person.obj2.married); //-> here we see again that when using dot notation, we should named the especific key value; and when using bracket notation we shouldnt use an especific key value. 

console.log(Object.keys(person));
console.log(Object.values(person));



for (let key in person){
    console.log(key); // key 
    console.log(person[key]); // value key
    // console.log(person.key); // dot notation vs braket notation: when using dot notation should be named the value of the property, variable cannot be named to value accessing when using dot notation. In that case, we should use bracket notation: console.log(person[key]) or console.log(person[age]);
    // console.log(person.religion); 
}