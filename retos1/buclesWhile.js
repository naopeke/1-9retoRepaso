"use strict";
//2
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameM = exports.EvenNumbers = void 0;
var EvenNumbers = /** @class */ (function () {
    function EvenNumbers(arrNumber) {
        this.arrNumber = arrNumber;
    }
    //método
    EvenNumbers.prototype.hasEven = function () {
        var i = 0;
        while (i <= this.arrNumber.length) {
            if (this.arrNumber[i] % 2 === 0) {
                console.log(this.arrNumber[i]);
            }
            i++;
        }
        return 'No more even numbers';
    };
    return EvenNumbers;
}());
exports.EvenNumbers = EvenNumbers;
var evenNumbers = new EvenNumbers([10, 4, 3]);
evenNumbers.hasEven();
//*********************************************************
//3
var NameM = /** @class */ (function () {
    function NameM(arrName) {
        this.arrName = arrName;
    }
    //método
    NameM.prototype.startWithM = function () {
        var i = 0;
        while (i < this.arrName.length) {
            if (this.arrName[i][0] !== 'M') {
                return false;
            }
            i++;
        }
        return true;
    };
    return NameM;
}());
exports.NameM = NameM;
var myNames = new NameM(['Miguel', 'Mike', 'Nancy']);
console.log(myNames.startWithM());
