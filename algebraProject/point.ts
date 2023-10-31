export class Point {
    public _x: number;
    public _y: number;

    constructor(x: number, y: number){
        this._x = x;
        this._y = y;
    }

    //método setters
    public set x(_x:number){
        this._x = _x;
    }

    public set y(_y:number){
        this._y = _y;
    }



    //método getters
    public get x():number {
        return this.x;
    }

    //método toString()
public toString():string {
    return `(${this._x}, ${this._y})`;
}

}