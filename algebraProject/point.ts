export class Point {
    public _x: number;
    public _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    //método setters
    public set x(_x: number) {
        this._x = _x;
    }

    public set y(_y: number) {
        this._y = _y;
    }



    //método getters
    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    //método toString()
    public toString(): string {
        return `(${this._x}, ${this._y})`;
    }


    //reto 2 : método de distancias
    public distanceTolOrigin(): number {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
    }

    //reto 2 : another point
    public calculateDistance(anotherPoint: Point): number {
        return Math.sqrt(Math.pow(this._x - anotherPoint._x, 2) + Math.pow(this._y - anotherPoint._y, 2))
    }

    //reto 3 : calcular cuadrante
    public calcularQuadrant(): number {
        if (this._x === 0 || this._y === 0){
            return 0;
        } else if (this._x > 0 || this._y > 0){
            return 1;
        } else if (this._x < 0 || this._y > 0){
            return 2;
        } else if (this._x < 0 || this._y < 0){
            return 3;
        } else {
            return 4;
        }
    }

}

