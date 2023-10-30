//2

export class EvenNumbers {
    public arrNumber: number[];

    constructor(arrNumber: number[]){
        this.arrNumber = arrNumber;
    }

    //método
    public hasEven():string {
        let i = 0;
        while (i <= this.arrNumber.length){
        if (this.arrNumber[i] % 2 === 0){
            console.log(this.arrNumber[i]);
            }
            i++;
        }
        return 'No more even numbers'
    }
}

let evenNumbers = new EvenNumbers([10, 4, 3]);
evenNumbers.hasEven();

//*********************************************************
//3
export class NameM {
    public arrName : string[];

    constructor(arrName: string[]){
        this.arrName = arrName;
    }

    //método
    public startWithM():boolean {
        let i = 0;
        while (i < this.arrName.length){
            if (this.arrName[i][0] !== 'M'){
                return false;
                }
                i++;
            }
            return true;
        }
    }

let myNames = new NameM (['Miguel', 'Mike', 'Nancy']);
console.log(myNames.startWithM());