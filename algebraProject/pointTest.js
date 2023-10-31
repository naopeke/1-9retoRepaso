"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint1 = new point_1.Point(5, 10);
//método toString
console.log(myPoint1.toString());
//método distance to origin
var distanceToOrigin = myPoint1.distanceTolOrigin();
console.log("distance to origin : ".concat(distanceToOrigin));
//método distance to another point
var myPoint2 = new point_1.Point(13, 15);
var distanceToAnotherPoint = myPoint1.calculateDistance(myPoint2);
console.log("distance to another point : ".concat(distanceToAnotherPoint));
//método calcular cuadrante
//setter
myPoint1.x = 10;
myPoint1.y = -5;
//getter
console.log("new point x is ".concat(myPoint1.x));
console.log("new point y is ".concat(myPoint1.y));
//toString
console.log(myPoint1.toString());
//resulto
var result = myPoint1.calcularQuadrant();
console.log(result);
