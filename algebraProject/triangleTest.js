"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
//reto5
var vertex1 = new point_1.Point(1, 1);
var vertex2 = new point_1.Point(5, 5);
var vertex3 = new point_1.Point(2, 3);
var myTriangle = new triangle_1.Triangle(vertex1, vertex2, vertex3);
var result = myTriangle.calculateLengthSides();
console.log("each side length is ".concat(result[0], ", ").concat(result[1], ", ").concat(result[2]));
