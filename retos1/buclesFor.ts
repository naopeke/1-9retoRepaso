//2
// ex) evenNumbers(5)  --> 1, 3, 5

export class OddNumbers {
    public number: number;

    constructor(number: number){
        this.number = number;
    }

    //método
    public evenNumbers():void {
        for (let i = 0; i <= this.number; i++){
            if (i % 2 === 1){
                console.log(i);
            }
        }
    }
}

let oddNumbers = new OddNumbers(5);
oddNumbers.evenNumbers();


//*********************************************************
//3
 
export class Revert {
    public myArr: number[];

    constructor(myArr: number[]){
        this.myArr = myArr;
    }

    //método
    public myRevert(): number[]{
       let revertArr: number[] = [];
    //let revertArr = []  error
    for (let i = this.myArr.length -1; i >= 0; i--){
        revertArr.push(this.myArr[i]);
//        console.log(this.myArr[i]); 
    }    
    return revertArr;
}
}


let enterArr = [11, 22, 33, 44, 55];
let revertNum = new Revert(enterArr);
console.log(revertNum.myRevert());


//*********************************************************
//4

export class Color {
    public color: string;

    constructor(color: string){
        this.color = color;
    }

    public isRainbow():boolean {
        let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
   //     return rainbowColors.includes(this.color);
//        return rainbowColors.indexOf(this.color) !== -1;
        for (let i = 0; i < rainbowColors.length; i++){
            if(rainbowColors[i] === this.color){
                return true;
            }
        }
        return false;
    }
}

let enterColor = new Color('blue');
let result = enterColor.isRainbow()
console.log(`${enterColor.color} is in the rainbow colors? : ${result}`);


//*********************************************************
//5
export class Sum {
    public words: string[];

    constructor(words: string[]){
        this.words = words;
    }

    //método
    public add():number {
        let sum = 0
        for (let i = 0; i < this.words.length; i++){
            sum += this.words[i].length
        }
        return sum;
    }
}

let myWords = ['Kimetsu no Yaiba', 'Yokai Watch', 'Re:Zero'];
let sum = new Sum(myWords);
console.log(`sum of the words is ${sum.add()}`);

