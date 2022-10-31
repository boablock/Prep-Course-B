

//1)
//x e y son numeros enteros
//devuelve el  numeor mas grande
// si son iguales, devuelve los dos
function obtenerElMayot(x,y){
    if (x > y){
        return x;
    }else if( y > x){
        return y;
    }else if (x === y){
        return x 
    }
}

console.log(obtenerElMayot(1,2));

//2)
//Determinar si la persona segun su edad puede entrar a un evento
//Si tiene 18 o mas, devolver --> allowed
//Si es menor, devolver --> not allowed
function mayoriaDeEdad(edad){
  if(edad >= 18){
    return 'Allowed'
  }else{
    return 'Not allowed'
  }
}

console.log(mayoriaDeEdad(18));

//3)
//we recibe an user conection status represented with a number
//When is 1, the status is 'online'
//when is 2, the status es 'away'
function connection(status){
    if (status === 1){
        return 'Online'
    }else if(status === 2){
        return 'away'
    }else{
        return 'Offline'
    }
}
  console.log(connection(2)); 

  //4)
//Write a greeting in three diferent idioms 
//If is aleman, return Guten Tag
//If the idiom is Mandarin, return 'Ni Hao'
//If is english, return 'Hello'
// If the idiom is not one of the above, return 'hola
function greeting(idiom){
    if( idiom === 'aleman'){
        return 'Guten Tag'
    }else if (idiom === 'Mandarin'){
        return 'Ni Hao'
    }else if (idiom === 'English'){
        return 'Hello';
    }else{
        return 'Hola';
    }
}
  console.log(greeting('aleman')); 

  //5)
  // The function recibe a color from parameter; return the corresponding string:
  // In case the color is blue, return --> this is blue
  // In case the color is red, return --> this is red
  // In case the color is brown, return --> this is brown
  // In case the color is black, return --> the color is black
  // Default case, return --> 'color not found'
  // Use the switch statement 

  function colors (color){
    switch (color) {
        case 'blue':
          return 'this is blue'
        case 'red':
            return 'this is red'
        case 'brown':
          return 'this es brown'
          case 'black':
            return 'this es black'
        default:
          return 'color not found'
    }
  }

  //6)
  // Return true if the number is 10 or 5
  // Otherwise, return 'false
  function isTenOrFive(number){
    if(number === 10 || number === 5){
        return true;
    }else{
        return false;
    }
  }

     //8)
  // Return true if the number is less than fifty and bigger than twenty 
  // Otherwise, return 'false'
  function inRange(number){
    if(number > 50  && number < 20){
        return true;
    }else{
        return false;
    }
  }


  //9)
  // Return true if the number is an integer
  // Otherwise, return 'false'
  // clue: can resolve with Math.floor
  function isInteger(number){
  if(Math.floor(number)=== number){
    return true; 
  }else{
    return false; 
  }
  }

  console.log(isInteger(0.2));

    //10)
  // If number is divisible by three, return 'fizz'
  // If number is divisible by five, return 'buzz'
  // If number is divisible by three and five, return 'fizzbuzz'
  // otherwise, return '
  function fizzBuzz(number){
    if(number % 5 === 0 && number % 3 ===0){ //-> in this case, the if order is important; the doble conditional must be first
      return 'FizzBuzz'
    }
    if (number % 3 === 0){
      return 'Fizz'
    }
    if (number % 5 === 0){
      return 'Buzz'
    }
    return number; 
  }
    console.log(fizzBuzz(0.1));

    //11)
    // The function recibe three diferent numbers
    // If num1 is bigger than num2 and num3 and is positive to, return--> 'Number 1 is bigger and positive
    // If any of three is negative , return--> there are negatives numbers
    // If num3 is bigger than num2 and num1, increse your value by one, and return the new value
    // If any of the arguments is 0, return 'Error'
    // If none of the above/ previous condition are met (cumple o se reunen), return 'false'

    function logicOperators(num1, num2, num3){ //--> again, the order of the conditions is important for the proper functioning of the program.
      if( num3, num2, num1 === 0){
        return 'Error'
      }
      if (num1 < 0|| num2 < 0|| num3 < 0){
        return 'There are negatives numbres'
      }
      if (num1 > num2 && num1 > num3 && num1 > 0){
        return 'Number 1 is bigger and positive'
      }
      if (num3 > num2 && num3 > num1 ){
        // let newNum3 = num3 +1;
        // return newNum3;
        num3 = num3 + 1; // num3++, num3+=1
      }
      else{
        return false;
      }
    }


    console.log(logicOperators(0,10,100));

    //12)
    // Return true is number is prime
    // othewise, return false
    // clue: a prime number is only divisible by self and by 1
    // clue2: can be resolved with a for loop.

    function isPrime(numero){
      if (numero < 2) return false; 
      if (numero  === 2) return true ;
      for (var i = 2; i < numero; i++ ){
        return false; 
      }
      return true; 
    }

    //13)
    //Escriba una funcion que reciba un valor booleano y retorne 'soy verdadero' si su valor es true.
    // Y 'Soy falso' si su valor en false 

    function isTrue (valor){
      if( valor === true) {
        return 'Im true';
      }
      else return 'Im false';
      
    }

    //14)
    // Wirite a function that shows the multiplication table of 6 (from cero to sixty)
    // The function return an array with results in increasing order.
    function sixTable(){
      let sixtable = [];
      let numero = 0;
      for(var i=0; i <=10; i ++){
        numero = 6 * i;
        sixtable.push(numero);
      }
      return sixtable;
    }

    console.log(sixTable());

    //15)
    // Read an integre number and return true if it has three number
    // otherwise, return false
    function haveThreeDigits(numero){
      let num = numero.toString()
      if (num.length === 3){
        return true;
      }else{
        return false;
      }
    }

    console.log(haveThreeDigits(122));

  //15)
  // Deply a function that increase  the recibed value by five, to a limit of 8 times
  // Return the final value
  //
