
//---- Callback function - fisrt class function  
// callback --> waits for a function to execute a command 


function sayHiToUser(usuario){
    return 'Hi ' + usuario + '!';
}

function sayByToUser (usuario){
    return 'Good by ' + usuario + '!';
}

function createGreet(usuario, cb){
    return cb(usuario); 
}

console.log(createGreet('Dario ', sayHiToUser));//--> functions that passed as argument were not executed (whithout -> ()). Is only called, then it will be executed inside the function "createGreet"
console.log(createGreet('Pedro ', sayByToUser));


function multiplicadorMaximo(num1,num2,multiplicar, cb){
    return cb(num1,num2) * multiplicar
}

function suma1(num1, num2){
    return num1 + num2
}

multiplicadorMaximo(2,4,2,suma1);
console.log(multiplicadorMaximo(2,4,2,suma1));
//----------

function subtract(num1,num2){
    return num1 - num2 
}

function add (num1, num2){
    return num1 + num2
}

function division(num1,num2){
    return num1 / num2
}

function multiply(num1,num2){
    return num1 * num2
}

function myCalculator(num1, num2, cb){
    return 'Su resultado es ' + cb(num1, num2)
}

console.log(myCalculator(10,3,add));
console.log(myCalculator(10,3,subtract));
console.log(myCalculator(10,3,multiply));
console.log(myCalculator(10,3,division));

// exercises 
let nombre = 'juampi';
let firstLetter = nombre.charAt(0);
let secondLetter = nombre.charAt(1); 
console.log(firstLetter, secondLetter);

let slice = nombre.slice(1); // uampi
console.log(slice);

//1)
//La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
//ej: Recibe "mario" ----> Devuelve "Mario"
//Tu código:
function mayuscula(nombre) {
   let nombre1 = nombre.charAt(0).toUpperCase() + nombre.slice(1); 
   return(nombre1);
   
  }

console.log(mayuscula('juampi'));

//2)
// Suma todos los números enteros (int/integers) de un array ("numeros")
// Pasa el resultado a `cb`
// No es necesario devolver nada
//Tu código:
function sumarArray(numeros, cb) {
    let sum = 0;
    numeros.forEach(element => {
      sum = sum + element
    });
    cb(sum);
  }

  //3)
// Itera sobre la matriz "array" y pasa los valores al callback uno por uno
// Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
//Tu código:
  function sumar(n1, n2, n3){
    return n1 + n2 + n3
  }
let array = [1,2,3]
  function forEach(array, cb) {
    for(let i = 0; i < array.length; i++){
      cb(array[i]);
      console.log(array);
    }
    return array; 
  }
  
  console.log(forEach(array,sumar));


  //4)
// Crea un nuevo array
// Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
// El nuevo array debe tener la misma longitud que el array del argumento
//Tu código:
/*
    let array2 =[1,2,3,4]
    function map(array, cb) {
        let newArray = array.map(function(element){
        cb(element)
        })
        return newArray; 
    }

    console.log(map(array2,));
*/
//5) 
//Filtrar todos los elementos del array que comiencen con la letra "a".
//Devolver un nuevo array con los elementos que cumplen la condición
//Tu código:
let array2 =[1,2,'a',3,4,'almace']
  function filter(array) {
    let newArray = [];
    array.forEach(element => {
        element.toUpperCase(); // or toLowerCase and looking for an 'a'.
      if(element[0] === 'A'){ // or (element[0] === 'a' || element[0] === 'A')
        newArray.push(element);
      }
    });
    return newArray;
  }
console.log(filter(array2));

function datosRandom(){
    return [4,'toto', false]
}

console.log(datosRandom);

datosEnArray = datosRandom();

array.forEach(element => {
    
});