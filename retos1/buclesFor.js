"use strict";
//2
// ex) evenNumbers(5)  --> 1, 3, 5
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sum = exports.Color = exports.Revert = exports.OddNumbers = void 0;
var OddNumbers = /** @class */ (function () {
    function OddNumbers(number) {
        this.number = number;
    }
    //método
    OddNumbers.prototype.evenNumbers = function () {
        for (var i = 0; i <= this.number; i++) {
            if (i % 2 === 1) {
                console.log(i);
            }
        }
    };
    return OddNumbers;
}());
exports.OddNumbers = OddNumbers;
var oddNumbers = new OddNumbers(5);
oddNumbers.evenNumbers();
//*********************************************************
//3
var Revert = /** @class */ (function () {
    function Revert(myArr) {
        this.myArr = myArr;
    }
    //método
    Revert.prototype.myRevert = function () {
        var revertArr = [];
        //let revertArr = []  error
        for (var i = this.myArr.length - 1; i >= 0; i--) {
            revertArr.push(this.myArr[i]);
            //        console.log(this.myArr[i]); 
        }
        return revertArr;
    };
    return Revert;
}());
exports.Revert = Revert;
var enterArr = [11, 22, 33, 44, 55];
var revertNum = new Revert(enterArr);
console.log(revertNum.myRevert());
//*********************************************************
//4
var Color = /** @class */ (function () {
    function Color(color) {
        this.color = color;
    }
    Color.prototype.isRainbow = function () {
        var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        //     return rainbowColors.includes(this.color);
        //        return rainbowColors.indexOf(this.color) !== -1;
        for (var i = 0; i < rainbowColors.length; i++) {
            if (rainbowColors[i] === this.color) {
                return true;
            }
        }
        return false;
    };
    return Color;
}());
exports.Color = Color;
var enterColor = new Color('blue');
var result = enterColor.isRainbow();
console.log("".concat(enterColor.color, " is in the rainbow colors? : ").concat(result));
//*********************************************************
//5
var Sum = /** @class */ (function () {
    function Sum(words) {
        this.words = words;
    }
    //método
    Sum.prototype.add = function () {
        var sum = 0;
        for (var i = 0; i < this.words.length; i++) {
            sum += this.words[i].length;
        }
        return sum;
    };
    return Sum;
}());
exports.Sum = Sum;
var myWords = ['Kimetsu no Yaiba', 'Yokai Watch', 'Re:Zero'];
var sum = new Sum(myWords);
console.log("sum of the words is ".concat(sum.add()));
