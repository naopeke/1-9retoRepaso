import { Point } from './point'
import { Triangle } from './triangle'


//reto5
let vertex1 = new Point(1, 1);
let vertex2 = new Point(5, 5);
let vertex3 = new Point(2, 3);

let myTriangle = new Triangle (vertex1, vertex2, vertex3);

let result = myTriangle.calculateLengthSides();
console.log(`each side length is ${result[0]}, ${result[1]}, ${result[2]}`);