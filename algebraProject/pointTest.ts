import { Point } from './point'

let myPoint1 = new Point(5, 10);

console.log(myPoint1.toString());
let distanceToOrigin = myPoint1.distanceTolOrigin();
console.log(`distance to origin : ${distanceToOrigin}`);

let myPoint2 = new Point(13, 15);
let distanceToAnotherPoint = myPoint1.calculateDistance(myPoint2);
console.log(`distance to another point : ${distanceToAnotherPoint}`);