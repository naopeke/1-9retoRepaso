"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Number = exports.Continent = exports.ZodiacSign = void 0;
//2
var ZodiacSign = /** @class */ (function () {
    //constructor
    function ZodiacSign(day, month) {
        this.day = day;
        this.month = month;
    }
    //método day and month
    ZodiacSign.prototype.setDay = function (newDay) {
        this.day = newDay;
    };
    ZodiacSign.prototype.setMonth = function (newMonth) {
        this.month = newMonth;
    };
    ZodiacSign.prototype.getDay = function () {
        return this.day;
    };
    ZodiacSign.prototype.getMonth = function () {
        return this.month;
    };
    //método search
    ZodiacSign.prototype.zodiac = function () {
        var result = "";
        //白羊座 (Aries):日付範囲: 3月21日 - 4月19日
        if (this.month === 3 && this.day >= 21 ||
            this.month === 4 && this.day <= 19) {
            result = 'Aries';
            //金牛座 (Taurus):日付範囲: 4月20日 - 5月20日    
        }
        else if (this.month === 4 && this.day >= 20 ||
            this.month === 5 && this.day <= 20) {
            result = 'Taurus';
            //双子座 (Gemini):日付範囲: 5月21日 - 6月20日        
        }
        else if (this.month === 5 && this.day >= 21 ||
            this.month === 6 && this.day <= 20) {
            result = 'Gemini';
            //蟹座 (Cancer):日付範囲: 6月21日 - 7月22日            
        }
        else if (this.month === 6 && this.day >= 21 ||
            this.month === 7 && this.day <= 22) {
            result = 'Cancer';
            //獅子座 (Leo):日付範囲: 7月23日 - 8月22日                
        }
        else if (this.month === 7 && this.day >= 23 ||
            this.month === 8 && this.day <= 22) {
            result = 'Leo';
            //乙女座 (Virgo):日付範囲: 8月23日 - 9月22日
        }
        else if (this.month === 8 && this.day >= 23 ||
            this.month === 9 && this.day <= 22) {
            result = 'Virgo';
            //天秤座 (Libra):日付範囲: 9月23日 - 10月22日
        }
        else if (this.month === 9 && this.day >= 23 ||
            this.month === 10 && this.day <= 22) {
            result = 'Libra';
            //蠍座 (Scorpio):日付範囲: 10月23日 - 11月21日
        }
        else if (this.month === 10 && this.day >= 23 ||
            this.month === 11 && this.day <= 21) {
            result = 'Scorpio';
            //射手座 (Sagittarius):日付範囲: 11月22日 - 12月21日
        }
        else if (this.month === 11 && this.day >= 22 ||
            this.month === 12 && this.day <= 21) {
            result = 'Sagittarius';
            //山羊座 (Capricorn):日付範囲: 12月22日 - 1月19日
        }
        else if (this.month === 12 && this.day >= 22 ||
            this.month === 1 && this.day <= 19) {
            result = 'Capricorn';
            //水瓶座 (Aquarius):日付範囲: 1月20日 - 2月18日
        }
        else if (this.month === 1 && this.day >= 20 ||
            this.month === 2 && this.day <= 18) {
            result = 'Aquarius';
            //魚座 (Pisces):日付範囲: 2月19日 - 3月20日
        }
        else if (this.month === 2 && this.day >= 19 ||
            this.month === 3 && this.day <= 20) {
            result = 'Pisces';
        }
    };
    return ZodiacSign;
}());
exports.ZodiacSign = ZodiacSign;
//         //白羊座 (Aries):日付範囲: 3月21日 - 4月19日
//         if (this.month === 3 && this.day >= 21 ||
//             this.month === 4 && this.day <= 19) {
//             return 'Aries';
//             //金牛座 (Taurus):日付範囲: 4月20日 - 5月20日    
//         } else if (this.month === 4 && this.day >= 20 ||
//             this.month === 5 && this.day <= 20) {
//             return 'Taurus';
//             //双子座 (Gemini):日付範囲: 5月21日 - 6月20日        
//         } else if (this.month === 5 && this.day >= 21 ||
//             this.month === 6 && this.day <= 20) {
//             return 'Gemini';
//             //蟹座 (Cancer):日付範囲: 6月21日 - 7月22日            
//         } else if (this.month === 6 && this.day >= 21 ||
//             this.month === 7 && this.day <= 22) {
//             return 'Cancer';
//             //獅子座 (Leo):日付範囲: 7月23日 - 8月22日                
//         } else if (this.month === 7 && this.day >= 23 ||
//             this.month === 8 && this.day <= 22) {
//             return 'Leo';
//             //乙女座 (Virgo):日付範囲: 8月23日 - 9月22日
//         } else if (this.month === 8 && this.day >= 23 ||
//             this.month === 9 && this.day <= 22) {
//             return 'Virgo';
//             //天秤座 (Libra):日付範囲: 9月23日 - 10月22日
//         } else if (this.month === 9 && this.day >= 23 ||
//             this.month === 10 && this.day <= 22) {
//             return 'Libra';
//             //蠍座 (Scorpio):日付範囲: 10月23日 - 11月21日
//         } else if (this.month === 10 && this.day >= 23 ||
//             this.month === 11 && this.day <= 21) {
//             return 'Scorpio';
//             //射手座 (Sagittarius):日付範囲: 11月22日 - 12月21日
//         } else if (this.month === 11 && this.day >= 22 ||
//             this.month === 12 && this.day <= 21) {
//             return 'Sagittarius';
//             //山羊座 (Capricorn):日付範囲: 12月22日 - 1月19日
//         } else if (this.month === 12 && this.day >= 22 ||
//             this.month === 1 && this.day <= 19) {
//             return 'Capricorn';
//             //水瓶座 (Aquarius):日付範囲: 1月20日 - 2月18日
//         } else if (this.month === 1 && this.day >= 20 ||
//             this.month === 2 && this.day <= 18) {
//             return 'Aquarius';
//             //魚座 (Pisces):日付範囲: 2月19日 - 3月20日
//         } else if (this.month === 2 && this.day >= 19 ||
//             this.month === 3 && this.day <= 20) {
//             return 'Pisces';
//         }
//     }
// }
new ZodiacSign(20, 11);
var zodiacSign = new ZodiacSign(20, 11);
var day = zodiacSign.getDay();
var month = zodiacSign.getMonth();
var zodiacName = zodiacSign.zodiac();
console.log("(Day,Month) ".concat(day, ".").concat(month, ":").concat(zodiacName));
//**********************************************************
//3
var Continent = /** @class */ (function () {
    //constructor
    function Continent(countryName) {
        this.countryName = countryName;
    }
    //método day and month
    // public continent(countryName:string){
    //     return this.continentName;
    // }
    Continent.prototype.continents = function () {
        // if (this.countryName === 'Spain' || this.countryName === 'France' || this.countryName === 'Portugal'){
        //     return 'Europa'
        // } else if (this.countryName === 'Japan' || this.countryName === 'North Corea' || this.countryName === 'China'){
        //     return 'Asia'
        // } else if (this.countryName === 'Egypt' || this.countryName === 'Tanzania' || this.countryName === 'Morocco'){
        //     return 'Africa'
        // } else if (this.countryName === 'Canada' || this.countryName === 'USA' || this.countryName === 'Cuba'){
        //     return 'North Ameria'
        // } else if (this.countryName === 'Argentin' || this.countryName === 'Peru' || this.countryName === 'Urguay'){
        //     return 'South America'
        // } else if (this.countryName=== 'New Zealand' || this.countryName === 'Australia' || this.countryName === 'Palau'){
        //     return 'Oseania'
        // }
        // else {
        //     return 'undefined';
        // }
        var result = "";
        if (this.countryName === 'Spain' || this.countryName === 'France' || this.countryName === 'Portugal') {
            result = 'Europa';
        }
        else if (this.countryName === 'Japan' || this.countryName === 'North Corea' || this.countryName === 'China') {
            result = 'Asia';
        }
        else if (this.countryName === 'Egypt' || this.countryName === 'Tanzania' || this.countryName === 'Morocco') {
            result = 'Africa';
        }
        else if (this.countryName === 'Canada' || this.countryName === 'USA' || this.countryName === 'Cuba') {
            result = 'North Ameria';
        }
        else if (this.countryName === 'Argentin' || this.countryName === 'Peru' || this.countryName === 'Urguay') {
            result = 'South America';
        }
        else if (this.countryName === 'New Zealand' || this.countryName === 'Australia' || this.countryName === 'Palau') {
            result = 'Oseania';
        }
        else {
            result = 'undefined';
        }
        return result;
    };
    return Continent;
}());
exports.Continent = Continent;
var continent = new Continent('Spain');
var country = continent.countryName;
var continentName = continent.continents();
console.log("country:".concat(country, "\ncontinent:").concat(continentName));
//********************************************************************
//4
var Number = /** @class */ (function () {
    //constructor
    function Number(number) {
        this.number = number;
    }
    Number.prototype.isEven = function () {
        var result = '';
        if (this.number % 2 === 0) {
            result = 'El numero es par';
        }
        else {
            result = 'El numero es impar';
        }
        return result;
    };
    return Number;
}());
exports.Number = Number;
var enterNumber = new Number(489);
var numbers = enterNumber.number;
var finalResult = enterNumber.isEven();
console.log("".concat(numbers, " : ").concat(finalResult));
