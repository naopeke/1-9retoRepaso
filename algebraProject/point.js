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
            return this.x;
        },
        //método setters
        set: function (_x) {
            this._x = _x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
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
    return Point;
}());
exports.Point = Point;
