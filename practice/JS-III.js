

//CLASE JS-III
/*
for (let i = 0; i< 10; i++){
    console.log(i);
}

function encontrarLaVocalA(string){
    for(let i =0; string.length; i= i +1 ){
        if( string[i] === 'a'){
            return ('Encontramos la vocal A');
        }
    }
    return ('El string no posee vocal A')
        
}

console.log (encontrarLaVocalA('Hola mi rey'));

let array1 = [1, 2 ,3 ,4, 5];

array1.push(6);
array1.pop();
array1.shift();
array1.unshift('uno');

for( let i=0; i < array1.length ; i++){
    console.log(array1[i]);
}

array1.forEach(element => console.log(element));

for (numero of array1){
    console.log( 'numero' + numero);
}

let array2 = [];
array2.forEach(element => array2.push(element *2));

console.log(array2[1]); 

let resultado = array2.map(element => element * 3 )
console.log(resultado);
*/
//-------------TRAINING----------------------




//1)
    function imprimirSumaNumeros() {
        // Imprime la suma de los números del 1 al 10
        // Pista: usa un acumulador
        // Tu código:
    let numeros =[1,2,3,4,5,6,7,8,9,10];
    let resultado = numeros.reduce((elemento, acumulador)=>{
        return acumulador + elemento
    }, 0)
    return resultado
        
    }

console.log(imprimirSumaNumeros());

//1) con for 
function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
let acumulador=0;
for (let i = 0;i < 11; i++){
    acumulador = acumulador + i;
}

return acumulador;
    
}

console.log(imprimirSumaNumeros());

//2)
    let array3 = [1,2,3,4,5,6,7,8,9,10,11];
    function devolverPrimerElemento(array){
        //devolver el primer elemento de un array  (pasado como parametro):
        return array[0];

    }
    console.log(devolverPrimerElemento(array3));

//3)
function devolverUltimoElemento(array){
    //devolver el ultimo elemento de un array:
    return array[array.length -1]; 

}
console.log(devolverUltimoElemento(array3));



//4)
function obtenerLargoDelArray(array){
    //devolver el largo de un array:
    return array.length; 
}
console.log(obtenerLargoDelArray(array3));


//5)
// let array3 = [1,2,3,4,5,6,7,8,9,10];
function incrementarPorUno(array){
    //"array" debe ser una matriz de enteros (int/integers)
    // la funcion aumenta cada elemento  del array  x1 (que es pasado como parametro)
    // luego devolve el nuevo array de numeros aumentados x1
    let = newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] + 1);
    }
    return newArray;
}
console.log(incrementarPorUno(array3));

//5)--> con map 
function incrementarPorUno(array){
    let newArray2 = array.map(element => element +1)
    return newArray2;
}

console.log(incrementarPorUno(array3));




//6)
// let array3 = [1,2,3,4,5,6,7,8,9,10];
function agregarItemAlFinalDelArray(array, elemento){
    //añade un elemento al final del arrray 
    // y devuelve el array
     // let newArray= array.push ('doce'); //unishit hace lo mismo que push pero lo agrega al final, y retorna la length no el array.
    // return newArray; 
    array.push(elemento);
    return array 
}
console.log(agregarItemAlFinalDelArray(array3, 'doce')); //--> el metodo push te retorna la longitud nueva del array, por eso consolea 11. El metodo push no retorta el array. El pop retorna el primer elemento. 



//7)
// let array3 = [1,2,3,4,5,6,7,8,9,10];
function agregarItemAlComienzoDelArray(array){
    //añade un elemento al comienzo del arrray 
    // y devuelve el array 
    // pista: metodo .unshift
    // let newArray= array.unshift('cero'); //unishit hace lo mismo que push pero lo agrega al final, y retorna la length no el array.
    // return newArray; 
    array.unshift('cero');
    return array;

}
console.log(agregarItemAlComienzoDelArray(array3));



//8)
function dePalabrasaFrases(palabras){
    //palabras es un array de string
    // devuelve un string donde todas las palabras esten conectadas
    // con espacios entre cada palabra
    // ejempl:['hello, 'world!']--> Hello world!
    return palabras.join('-');

}
console.log(dePalabrasaFrases(['Hello', 'rey!', 23, 'que', 'haces']));



//9)
function arrayContiene(array, element){
    //comprueba si el elemento existe dentro del array 
    // devuelve true si esta, devuelve false si no esta 
    for (let i = 0; i < array.length; i = i + 1){
        if(element === array[i]){
            return 'pepe'; 
        }
    }
    return false;
}
//9)--> con forEach
console.log(arrayContiene(array3, 1));

function arrayContine2(array, elemento){
    array.forEach(element => {
        if(element === elemento){
            return 'hola'
        }
    });
}

console.log(arrayContiene(array3, 'hola')); //-> why forEach return only true or false?



//10)
// numeros debe ser un arreglo de enteros
// suma todos los enteros y devuelve el valor 
let array4 = [1,2,3,4,5,6,35,7,8,9,10,11,100,22];
function sumarNumeros(numeros){
    suma=0; 
    for(let i = 0; i < numeros.length; i++){
        suma =suma + numeros[i]; 
    }
    return suma; 
}
console.log(sumarNumeros(array4));




//11)
//'resultadosTest' debe ser un arreglo de enteros
// itera (en un bucle) los elemnetos del array, calcula y devuelve el promedio de puntajes
let array5 = [10,8,10,8,10];
function promedioResultadosTest(resultadosTest){
    // suma= 0;
    // for(let i=0; i < resultadosTest.length; i++){
    //     suma = suma + resultadosTest[i];
    // }
    // return suma / resultadosTest.length; 
//}
    suma= 0;
    resultadosTest.forEach(element => 
        suma = suma + element );
    return suma/ resultadosTest.length;
}
console.log(promedioResultadosTest(array5));



//12)
// numeros debe ser una matriz de enteros (int/integers)
// devuelve el numero mas grande
let array6 = [1,2,3,4,5,23,6,7,7,8,9,10];
function numeroMasGrande(numeros){
    let caja = numeros[0];//--> decreto que el primero es el mayor, ya que no lo conozco.  
    for( let i = 1; i < numeros.length; i++){
        if(numeros[i] > caja){ //--> en caja siempre voy a tener guardado el mayor numero. 
            caja = numeros[i];
        }
    }
    return caja; 
}
console.log(numeroMasGrande(array6));

/*
//13)
// Usar la palabra clave 'arguments' para multiplicar todos los argumentos  y devolver el producto
// Si no se pasan argumentos devuelve cero, si se pasan, devuelve el argumento

function multiplyArguments(){
 
}
console.log(multiplyArguments());

*/


//14
// realiza una funcion que retorne la cantidad de los elementos cuyo valores sea mayor a 18
function cuentoElementos(arreglo){
let valores = 0;
arreglo.forEach(element => {
    if(element > 18){
        valores = valores +1;
    }
});
return valores;
}

 console.log(cuentoElementos(array4));

 //14)--> with FOR 
 function cuentoElementos2(arreglo){
    let mayoresA18 = 0;
    for (let i =0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
        mayoresA18 = mayoresA18 +1;
    }
   
   }
   return mayoresA18; //-> return stop bucle, because of that is importat to put the return outside the loop. 
}

console.log(cuentoElementos2(array4)); 

//15)
// Suponiendo qu elos dias de la semana se codifican como domingo=1, lunes=2 y asi sucesivamente. 
// Realizar una funcion que dado el numero de dia, retorne fin de semana o dia laboral. 
function diaDeLaSemana(numeroDeDia){
    if(numeroDeDia === 1 ||numeroDeDia === 7 ){
        return 'Fin de semana'; 
    }else{
        return 'Dia laboral';
    }
}

console.log(diaDeLaSemana(7));

//16)
// Usa la palabra clave 'arguments' para multiplicar todos los argumentos  y devolver el producto 
// si no se pasan argumentos, devuelve 0. Si se pasa un argumento, simplemente devuelvelo. 
function muliplicarArgumentos(){
    console.log(arguments);
}

muliplicarArgumentos();
muliplicarArgumentos(1,2,3);


//17)
// Devuelve un arreglo con los pares encontrados
// en el arreglo de enteros pasado como parámetro
// Tu código:
function encuentraPares(array){
    newArray =[];
    array.forEach(element => {
        if (element % 2== 0){
            newArray.push(element)
        }
    })
    return newArray;
}  
console.log(encuentraPares(array6));


//16)--> con while

function encuentraPares(array){
    // Devuelve un arreglo con los pares encontrados
    // en el arreglo de enteros pasado como parámetro
    // Tu código:
    let newArray = [];
    let index = 0;
    while(index < array.length){
        if (array[index] % 2 ==0){
            newArray.push(array[index]);
        }
        index ++;
    }
    return newArray
  }

  console.log(encuentraPares(array6));




//18)
// Devuelve un arreglo con cada número del array
// elevado al cuadrado
// Tu código:
function elevaAlCuadrado(array){
    newArray =[];
    array.forEach(element => {
      newArray.push (element**2);
    });
    return newArray;
  }

  console.log(elevaAlCuadrado(array6));


//18) --> con map: retorna el array directamente
function elevaAlCuadrado2(array){
    let result = array.map(function (num){
    return Math.pow(num, 2);
    })
    return result;
  }

  console.log(elevaAlCuadrado2(array6));
// you can save the result in a variable and return de variable or return the map result directly. 

//18) --> pasando funcion como parametro al map
function elevaAlCuadrado3(array){
    let alCuadrado = function (num){
        return Math.pow(num,2)
    }
    let result = array.map(alCuadrado);//--> va sin los parentesis por que solo se la pasa como CALLBACK, no se invoca. 
    return result; 
  }

  console.log(elevaAlCuadrado3(array6));


//19)
    // Devuelve el resultado de sumar todos los elementos
    // de un arreglo de enteros dado
    // Tu código:
  function sumaArray(array){
    let suma = 0;
    array.forEach(element =>{
      suma = suma + element;
    })
    return suma; 
  }
    console.log(sumaArray(array6));

//19)--> con for
  function sumaArray2(array){
    let suma = 0;
    for(let i=0; i < array.length;i++){
        suma = suma + array[i];
    }
    return suma;
  } 

    console.log(sumaArray2(array6));
//19)--> con reduce 
function sumaArray3(array){
    let resultado = array.reduce (function (acumumulador,num){
        return acumumulador + num; 
    },0)

return resultado;
} 
    console.log(sumaArray3(array6));

//19) -->while

//20)
function numeroDigitos(num){
    // Devuelve el número de dígitos de un número dado
    // Tu código:
    // 100 --> 3
    // 100 + a = "100a"
    // 100 + "" --> "100" 
    let result = new String(num).length
    return result;
  }
  
  console.log(numeroDigitos(3232));

  function numeroDigitos2(num){
    // Devuelve el número de dígitos de un número dado
    // Tu código:
    // 100 --> 3
    // 100 + a = "100a"
    // 100 + "" --> "100" 
    let numeroAString = num + ""; //--> casteo de datos. 
    return numeroAString.length;
  }

  console.log(numeroDigitos2(3232));
//21)
//Desarrolle una funcion que recibe como parametro un numero entero n. 
//Debe retortar false si el entero empieza con 9, false en otro caso
// primero convertir el numero en strig, para tener capacidad de manipular la entrada
  function empiezaConNueve(n){
    let num = n.toString(); // transformo el parametro en string;
    if (num.charAt(0)=== '9'){ // charAt devuelve en un nuevo string el caracter segun la posicion indicada.
        return true;
    }else{
        return false;   
    }
  }

  console.log(empiezaConNueve(92323));

  function empiezaConNueve(n){
    let num = n.toString(); // transformo el parametro en string;
    if (num[0]=== '9'){ // charAt devuelve en un nuevo string el caracter segun la posicion indicada.
        return true;
    }else{
        return false;   
    }
  }

  console.log(empiezaConNueve(92323));
//22)
//La funcion tiene que indicar si todos los elementos de un arreglo son iguales. Si es asi, retorna true, si no, false
  function todosIguales(arreglo){
    for(var i = 0; i < arreglo.length-1; i++ ){
        if(arreglo[i] !== arreglo[i+1]){
            return false
        }
    }
    return true; 
  }

  console.log(todosIguales(array6));

  //23) 
  //Dado un array que contiene algunos del año desordenados , recorres el array buscando los meses 
  // Enero, febrero, marzo, guardarlo en un nuevo array y retornatlo
  // Si alguno de los meses no esta, retornar ' no se encontraron los meses pedidos!

  function mesesDelAño(array){
    let newArray =[]; 
    for(var i =0; i < array.length; i++){
        if( array[i] === 'Enero' || array[i] === 'febrero'|| array[i] === 'marzo'){
            newArray.push(array[i]);
        }

    }
    if(newArray.length < 3){
        return 'No se enconetraron los meses pedidos'
    }
    return newArray;
  }

  console.log(mesesDelAño(array6));

    //24) 
  //la funcion recien por parametro un array con enteros entre 0 y 200. 
  // Recorre el array y guarda en un nuevo array solo los valores mayores a 100, no incluye al 100. 
  // Finalmente devolver el nuevo array. 
  let array7 = [1,2,3,4,5,23,6,7,7,8,9,101,120,333];
  function mayorACien(array){
    let newArray=[];
    array.forEach(element => {
        if(element > 100){
            newArray.push(element);
        }
    });
    return newArray;
  }

  console.log(mayorACien(array7));

  
    //25) 
    //iterar en un blucle aumentando en 2 el numero recibido hasta un limite de 10 veces. 
    // guardar cada nuevo valor en un nuevo array
    // devolver el array
    // si en algun momento, el valor de la suma y la cantidad de iteraciones coinciden , debe interrumpirse la ejecucion y devolver: 'se interrumpio la ejecucion'-
    //pista: usa el statement 'break' 
  function breakStatement(numero){
    let newArray=[];
    let suma = numero;
    for(var i =0; i <= 10; i++){
        suma = suma +2 // 2
        if(suma === i){ // si suma =2 , i = 2
            // return ' suma= ' + suma + ' i= '+ i; 
            break;
        }else{
            newArray.push(suma);
        }
    }
    if(i < 10){ //-> es la unica forma de comprobar que se interrumpio la ejecucion
        return 'Se interrumpio la ejecucion'
    }else{
        return newArray
    }
}
  console.log(breakStatement(-4));


//26) ?????????????
//Iterar en un bucle aumentando en 2 un numero recibido hasta un limite de 10 veces
// Guardar cada nuevo valor en un array 
// Devolver el array
// cuando el numero de iteraciones alcanza el valor 5 , en ese caso no se suma y se continua con la siguiente iteracion
//pista: usa el statement 'continue'
function continueStatement(numero){
    let newArray =[];
    let suma = numero; 
    for ( var i = 0; i < 10; i++){
        if (i === 5){
            continue; 
        } 
        suma = suma +2;
        newArray.push(suma);
    }
    return newArray;
}

console.log(continueStatement(2));

