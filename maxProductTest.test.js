let {getMaximumProduct} = require("./maxProduct");

test ("get the maximum product of numbers in an array", ()=>{
    let arr = [1, 5, 10, 4, 0];
    let answer = getMaximumProduct(arr)
    expect(answer).toBe(50);

})

test ("get the maximum product of negative numbers in an array", ()=>{
    let arr = [-1, -5];
    let answer = getMaximumProduct(arr)
    expect(answer).toBe(5);

})