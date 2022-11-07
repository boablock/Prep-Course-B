



//----------John Mircha----------  

//POO
/**
 * - Classes --> modelo a seguir 
 * - Objets --> is an instance of a class (es una estancia de una clase)
 * - Attribute -->
 * - Methods
 * 
 */
// CLASS-> MECHANISM BY WITCH AN OBJECT MAY INHERIT (FROM FATHER OBJECT) ATRIBUTES (CARACTERISTIC) AND METHODS (FUNCTIONS)

/*

//--LITERAL OBJECT--
const animal = {
  nombre: 'Lala',
  sonar(){
    console.log('I make sounds causa im alive');
  },
  saludar(){
    console.log(`Hola me llamo ${this.name}`);
  }
}
const animal2 = {
  nombre: 'Akiva',
  sonar(){
    console.log(' make sounds causa im alive');
  },
  saludar(){
      console.log(`Hola me llamo ${this.name}`);

}
}

console.log(animal);
console.log(animal2);

//Construction function (antes de EMS6) --> atributes and methds must have this. 
//Always, we must asign methods to the prototype object of the construction function, never insde the construction function. The construction function should only have atributes  (no methods); because every method will duplicate in each object future instance. 
function Animal(name, gender){
  this.name = name;
  this.gender = gender;
  // this.sonar= function(){
  //   console.log('I make sounds cause i alive');//--> se debe asignar al prototipo de la funcion constructura Animal, el metodo sonar. Sacarlo, cada vez que se genera una nueva instancia (una nueva variable del tipo Animal) del objeto constructor Animal, se duplica ese metodo sonar en cada una de las instancias de los objetos. that will improve performance and memory space.(classes fix it with sugar sintax). 

  }
  // this.saludar =function(){
  //   console.log(`Hola me llamo ${this.name}`);
  

// Prototypical inheritance 

function Perro(name, gender, size){
  this.super = Animal; //--> method super: call to father element (animal)
  this.super(name, gender);
  this.size = size; 

}

const akiva = new Animal('Akiva', 'female')
const lala = new Animal ('Lala', 'female');

console.log(akiva);
console.log(lala);

// Methods added to contruction function --> for optimization 
Animal.prototype.sonar = function(){
  console.log('I make sounds cause i alive');
}
Animal.prototype.saludar = function(){
  console.log(`Hola me llamo ${this.nomnbre}`);
}

// CLASSES --> Sugar Sintax
class Animal2 {
  constructor(name, gender){
  this.name = name;
  this.gender = gender;
  }
  bark(){
    console.log(`Guaw, im ${this.gender}`);
  }
  greet(){
    console.log(`my name is ${this.name}`);
  }
}

const candela = new Animal2('Candela', 'Female');
const bombon = new Animal2('Bombon', 'male');

console.log(candela);
console.log(bombon);
candela.greet();
candela.bark();
bombon.greet();
bombon.bark();
*/







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
/*
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

*/

//1)
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
    // Usuario = {usuario: 'jssamuel', nombre: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' }
function crearUsuario() {
    function Usuario(opciones){
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
     
    }
    Usuario.prototype.saludar = function(){
      return  'Hola, mi nombre es ' + this.nombre
      }
      return Usuario; 
    }

    



    //Example without function
    function Usuario(opciones){
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
     
    }
    Usuario.prototype.saludar = function(){
      return  'Hola, mi nombre es ' + this.nombre
      }

    
      var newUsuario = new Usuario ({
        usuario: 'juampi.boa',
        nombre: 'Juan Pablo',
        email: 'Juampi_boada@gmail.com',
        password: ' 123'
      });

    console.log(newUsuario);
    console.log(newUsuario.saludar());


//2)
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
    function agregarMetodoPrototype(Constructor) {

  Constructor.prototype.saludar = function(){
    return "Hello World!"; 
  }
}

//3)
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
function agregarStringInvertida() {
    String.prototype.reverse = function(){
      var inverted='';
      for (let i = this.length -1; i >=0; i--){
        inverted = inverted + this[i];
      }
      return inverted; 
    }
  }

function agregarStringInvertida() {
    String.prototype.reverse = function(){
        var inverted='';
        for (let i = 0; i < this.length; i++){
          inverted = inverted + this[i];
        }
        return inverted; 
      }
  }

function inverted(string){
    inverted ="";
    for(let i = 0; i < string.length; i++){
        inverted = string[i] + inverted;
        // inverted = i=0--> h + "", i=1--> o + h, i=2--> l + oh, i=3--> a + loh. return= aloh
    }
    return inverted;
}
console.log(inverted('hola'));

function inverted2(string){
    var inverted='';
    for (let i = string.length -1; i >=0; i--){
    inverted = inverted + string[i];
    }
    return inverted; 
    }
console.log(inverted2('patito'));

//4)
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
    detalle(){
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio,
      }
    }

  } 

  let newPerson = new Persona ('JP', 'BOADA', 12, 'AV 123');
  console.log(newPerson);
  console.log(newPerson.detalle());





function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  let newPerson = new Persona("Juan", "Perez", 22, "Saavedra 123");
  return newPerson;
}

//5)
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
function agregarMetodo() {
Persona.prototype.datos = function(nombre, edad){
  return this.nombre + ', ' + this.edad + ' ' + 'años'; 
}
}





