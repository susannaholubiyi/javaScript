let Shape = require("./shape.js")

class Rectangle extends Shape{
    constructor(name, length, breadth){
        super(name)
        this.length = length;
        this.breadth = breadth;
    }
    getName(){
        return this.__name;
    }
    setLength(newLength){
        this.length = newLength;
    }
    getLength(){
        return this.length;
    }
    setBreadth(newBreadth){
        this.breadth = newBreadth;
    }
    getBreadth(){
        return this.breadth;
    }
    getArea(){
        return (this.length * this.breadth);
    }
    isSquarish(length, breadth){
        if (length == breadth) return true;
        else return false;

    }

}
module.exports = (Rectangle)