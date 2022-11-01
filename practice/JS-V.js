
// var messi = {
//     nombre: 'Lionel',
//     apellido: 'Messi',
//     saluda: function(){
//         console.log('Hola soy messi');
//     }, 
// }

// messi.saluda();
// console.log(messi);

// 🛠 -- CONSTRUCTION FUNCTION -- 🛠
/*
    var Person = function(nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido ,
        this.saluda = function (){
            console.log('hola soy ' + this.apellido);
        }
    }
    var Bart = new Person('Bart', 'simpson'); //-> object instantiation 
    var Messi = new Person ('Lionel', 'Messi');

    Bart.saluda();
    Messi.saluda();
*/
// 
var Person = function(name, surname){
    this.name = name; //--> this. makes reference to class properties only
    this.surname = surname;
}
// instantiating 'saludar' method in the prototype (father object) of Persona (out of the constructor), for better optimization. 
Person.prototype.saluda = function (string ){ 
    console.log(string + 'im ' + this.surname);
}

var bart = new Person('Bart', 'simpson'); //-> object instantiation 
var messi = new Person ('Lionel', 'Messi'); //-> in every object instance, each one will have particular caracteristics (thanks to the object constructor Person) throught parameters ; besides, it will have access to  prototype box tool with his own methods (are not in the constructure, for optimization). 

// bart.saluda();
// messi.saluda();

// console.log(bart);
// console.log(messi);
// console.log(messi.__proto__) //--> calling messi object father (prototype), that includes'saludo' method. 

var homero = {
    name: 'Hombero',
    surname : 'Simpson',
}

homero.__proto__= messi; 
console.log(homero);
homero.saluda('Hi ');

// PROTOPYPE CHAIN => homero --> messi --> Persona --> Object --> null

// CREATE AN OBJET WITH AN EMPTY OBJECT AS PROTOTYPE
// CREAMOS UN OBJETO CON UN OBJETO VACIO COMO PROTOTYPE
var obj = Object.create({});
console.log(obj);
// CREATE AN OBJECT FROM A PROTOTYPE OBJECT
// CREAMOS UN OBJETO A PARTIR DE UN PROTOTYPE DE OBJETO 
var obj = Object.create(Object.prototype);
// WHICH IS THE SAME AS CREATE AN EMPTY LITERAL OBJECT
// QUE ES LO MISMO QUE CREAR UN OBJETO VACIO LITERAL
