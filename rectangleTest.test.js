let Rectangle = require("./rectangle.js")

test ("get name of shape", ()=>{
    wallOne = new Rectangle("roomWall", 5, 5)
    let answer = wallOne.getName();
    expect (answer).toBe("roomWall");
})

test ("get area of shape", ()=>{
    wallOne = new Rectangle("roomWall", 5, 5)
    let answer = wallOne.getArea();
    expect (answer).toBe(25);
})

test ("checks if shape is a square", ()=>{
    wallOne = new Rectangle("roomWall", 5, 5)
    let answer = wallOne.isSquarish();
    expect (answer).toBe(true);
})