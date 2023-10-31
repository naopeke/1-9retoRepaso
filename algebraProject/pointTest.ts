import { Point } from './point'

let myPoint1 = new Point(5, 10);

//método toString
console.log(myPoint1.toString());

//método distance to origin
let distanceToOrigin = myPoint1.distanceTolOrigin();
console.log(`distance to origin : ${distanceToOrigin}`);

//método distance to another point
let myPoint2 = new Point(13, 15);
let distanceToAnotherPoint = myPoint1.calculateDistance(myPoint2);
console.log(`distance to another point : ${distanceToAnotherPoint}`);

//método calcular cuadrante
//setter
myPoint1.x = 10;
myPoint1.y = -5;
//getter
console.log(`new point x is ${myPoint1.x}`);
console.log(`new point y is ${myPoint1.y}`);
//toString
console.log(myPoint1.toString());
//resulto
let result = myPoint1.calcularQuadrant();
console.log(result);