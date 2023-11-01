"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    //método calculateLengthSides
    Triangle.prototype.calculateLengthSides = function () {
        var side1 = this.vertex1.calculateDistance(this.vertex2);
        var side2 = this.vertex2.calculateDistance(this.vertex3);
        var side3 = this.vertex3.calculateDistance(this.vertex1);
        return [side1, side2, side3];
    };
    return Triangle;
}());
exports.Triangle = Triangle;
