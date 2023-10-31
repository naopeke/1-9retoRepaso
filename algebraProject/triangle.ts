import { Point } from './point'

export class Triangle {
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(vertex1:Point, vertex2:Point, vertex3:Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    //método calculateLengthSides
    public calculateLengthSides():number[]{
        let side1 = this.vertex1.calculateDistance(this.vertex2);
        let side2 = this.vertex2.calculateDistance(this.vertex3);
        let side3 = this.vertex3.calculateDistance(this.vertex1);
        return [side1, side2, side3];
    }
}