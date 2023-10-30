import { Number } from './condicionales'
import { Sum } from './buclesFor'

let myWord1 = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
let myWord2 = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil'];
let myWord3 = ['Venezuela', 'Veneno', 'Voltaje'];

//condicionales
let number1 = new Number(4);
console.log(number1.isEven());



//bucles For
let sum1 = new Sum(myWord1);
console.log(`sum of the words of the first array is ${sum1.add()}`);

let sum2 = new Sum(myWord2);
console.log(`sum of the words of the second array is ${sum2.add()}`)

let sum3 = new Sum(myWord3);
console.log(`sum of the words of the third array is ${sum3.add()}`)

