
//2
export class ZodiacSign {
    public day: number;
    public month: number;

    //constructor
    constructor(day: number, month: number) {
        this.day = day;
        this.month = month;
    }

    //método day and month
    public setDay(newDay: number): void {
        this.day = newDay;
    }

    public setMonth(newMonth: number): void {
        this.month = newMonth;
    }

    public getDay(): number {
        return this.day;
    }

    public getMonth(): number {
        return this.month;
    }

    //método search
    public zodiac() {
        //白羊座 (Aries):日付範囲: 3月21日 - 4月19日
        if (this.month === 3 && this.day >= 21 ||
            this.month === 4 && this.day <= 19) {
            return 'Aries';
            //金牛座 (Taurus):日付範囲: 4月20日 - 5月20日    
        } else if (this.month === 4 && this.day >= 20 ||
            this.month === 5 && this.day <= 20) {
            return 'Taurus';
            //双子座 (Gemini):日付範囲: 5月21日 - 6月20日        
        } else if (this.month === 5 && this.day >= 21 ||
            this.month === 6 && this.day <= 20) {
            return 'Gemini';
            //蟹座 (Cancer):日付範囲: 6月21日 - 7月22日            
        } else if (this.month === 6 && this.day >= 21 ||
            this.month === 7 && this.day <= 22) {
            return 'Cancer';
            //獅子座 (Leo):日付範囲: 7月23日 - 8月22日                
        } else if (this.month === 7 && this.day >= 23 ||
            this.month === 8 && this.day <= 22) {
            return 'Leo';
            //乙女座 (Virgo):日付範囲: 8月23日 - 9月22日
        } else if (this.month === 8 && this.day >= 23 ||
            this.month === 9 && this.day <= 22) {
            return 'Virgo';
            //天秤座 (Libra):日付範囲: 9月23日 - 10月22日
        } else if (this.month === 9 && this.day >= 23 ||
            this.month === 10 && this.day <= 22) {
            return 'Libra';
            //蠍座 (Scorpio):日付範囲: 10月23日 - 11月21日
        } else if (this.month === 10 && this.day >= 23 ||
            this.month === 11 && this.day <= 21) {
            return 'Scorpio';
            //射手座 (Sagittarius):日付範囲: 11月22日 - 12月21日
        } else if (this.month === 11 && this.day >= 22 ||
            this.month === 12 && this.day <= 21) {
            return 'Sagittarius';
            //山羊座 (Capricorn):日付範囲: 12月22日 - 1月19日
        } else if (this.month === 12 && this.day >= 22 ||
            this.month === 1 && this.day <= 19) {
            return 'Capricorn';
            //水瓶座 (Aquarius):日付範囲: 1月20日 - 2月18日
        } else if (this.month === 1 && this.day >= 20 ||
            this.month === 2 && this.day <= 18) {
            return 'Aquarius';
            //魚座 (Pisces):日付範囲: 2月19日 - 3月20日
        } else if (this.month === 2 && this.day >= 19 ||
            this.month === 3 && this.day <= 20) {
            return 'Pisces';
        }
    }
}


new ZodiacSign(20, 11);
let zodiacSign = new ZodiacSign(20, 11);

let day = zodiacSign.getDay();
let month = zodiacSign.getMonth();
let zodiacName = zodiacSign.zodiac();
console.log(`(Day,Month) ${day}.${month}:${zodiacName}`);


//**********************************************************
//3

export class Continent {
    public countryName: string;

    //constructor
    constructor(countryName: string) {
        this.countryName = countryName;
    }

    //método day and month
    // public continent(countryName:string){
    //     return this.continentName;
    // }

    public continents ():string{
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

            let resultado:string = "";
            if (this.countryName === 'Spain' || this.countryName === 'France' || this.countryName === 'Portugal'){
                resultado = 'Europa'
            } else if (this.countryName === 'Japan' || this.countryName === 'North Corea' || this.countryName === 'China'){
                 resultado = 'Asia'
            } else if (this.countryName === 'Egypt' || this.countryName === 'Tanzania' || this.countryName === 'Morocco'){
                 resultado = 'Africa'
            } else if (this.countryName === 'Canada' || this.countryName === 'USA' || this.countryName === 'Cuba'){
                 resultado = 'North Ameria'
            } else if (this.countryName === 'Argentin' || this.countryName === 'Peru' || this.countryName === 'Urguay'){
                 resultado = 'South America'
            } else if (this.countryName=== 'New Zealand' || this.countryName === 'Australia' || this.countryName === 'Palau'){
                 resultado = 'Oseania'
            }
            else {
                 resultado = 'undefined';
            }
             return resultado
        }
    }


let continent = new Continent ('Spain');
let country = continent.countryName;
let continentName = continent.continents();

console.log(`country:${country}\ncontinent:${continentName}`);





//********************************************************************
//4
export class Number {
    public number: number;

    //constructor
    constructor(number: number) {
        this.number = number;
    }

    public  isEven():string{
        if (this.number % 2 === 0){
            return 'El numero es par';
        } else {
            return 'El numero es impar';
        }
    }
}

let enterNumber = new Number(489);
let numbers = enterNumber.number;
let result = enterNumber.isEven();
console.log(`${numbers} : ${result}`);
