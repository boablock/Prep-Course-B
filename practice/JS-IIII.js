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
    console.log(person[key]); // dot notation: we should use dot notation only with the exacly property name. For access to a property throght a variable name (like key), we should use bracket notation. We use dot notation when we know object properties. 
    // console.log(person.key); // dot notation vs braket notation: when using dot notation should be named the exacly property name, variable cannot be named for property accessing when using dot notation. In that case, we should use bracket notation: console.log(person[key]).
    // console.log(person.religion); 
}


//1)
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
function tieneEmail (usuario) {
      if(usuario.email === null || usuario.email === undefined){
        return false;
      }else{
        return true;
      }
    }

function tieneEmail (usuario) {
  for (key in usuario){ 
    if(usuario.email){
      return true;
    }else{
      return false;
    }
  }
}
//2)--> creat the object 'usuario' and use it like a parameter calling the function sumarLikesDeUsuario
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
function sumarLikesDeUsuario (usuario) {
  suma =0;
  for(let i = 0; i < usuario.posts.length; i++){
    suma = suma + usuario.posts[i].likes;
  }
  return suma; 
}
//3) 
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
function agregarMetodoCalculoDescuento (producto) {
  producto.calcularPrecioDescuento = function (){
    return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
    
  }
  return producto; 
}