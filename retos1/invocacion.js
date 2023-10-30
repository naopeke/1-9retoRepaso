"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var myWord1 = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
var myWord2 = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil'];
var myWord3 = ['Venezuela', 'Veneno', 'Voltaje'];
//condicionales
var number1 = new condicionales_1.Number(4);
console.log(number1.isEven());
//bucles For
var sum1 = new buclesFor_1.Sum(myWord1);
console.log("sum of the words of the first array is ".concat(sum1.add()));
var sum2 = new buclesFor_1.Sum(myWord2);
console.log("sum of the words of the second array is ".concat(sum2.add()));
var sum3 = new buclesFor_1.Sum(myWord3);
console.log("sum of the words of the third array is ".concat(sum3.add()));
