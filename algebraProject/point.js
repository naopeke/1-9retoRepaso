"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        //método getters
        get: function () {
            return this._x;
        },
        //método setters
        set: function (_x) {
            this._x = _x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (_y) {
            this._y = _y;
        },
        enumerable: false,
        configurable: true
    });
    //método toString()
    Point.prototype.toString = function () {
        return "(".concat(this._x, ", ").concat(this._y, ")");
    };
    //reto 2 : método de distancias
    Point.prototype.distanceTolOrigin = function () {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
    };
    //reto 2 : another point
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt(Math.pow(this._x - anotherPoint._x, 2) + Math.pow(this._y - anotherPoint._y, 2));
    };
    //reto 3 : calcular cuadrante
    Point.prototype.calcularQuadrant = function () {
        if (this._x === 0 || this._y === 0) {
            return 0;
        }
        else if (this._x > 0 || this._y > 0) {
            return 1;
        }
        else if (this._x < 0 || this._y > 0) {
            return 2;
        }
        else if (this._x < 0 || this._y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    //reto4
    Point.prototype.calculateNearest = function (points) {
        var _this = this;
        var nearestPoint = points.reduce(function (currentPoint, point) {
            return _this.calculateDistance(point) < _this.calculateDistance(currentPoint) ?
                point : currentPoint;
        }, points[0]);
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
