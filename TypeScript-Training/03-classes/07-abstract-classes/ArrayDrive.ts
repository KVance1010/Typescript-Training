import { Shape } from "./Shape";
import { Circle } from "./Circle";
import {Rectangle} from "./Rectangle"

let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(5,10,20, 25);

// declare an array of shapes that is empty

let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}

