let {getModeFrom} = require("./mode.js");

test ("function returns the most occuring digit", ()=>{
    let input = [1, 1, 2, 2, 2]
    let output = getModeFrom(input);
    expect (output).toEqual([2])
})

test ("function returns the most occuring digit", ()=>{
    let input = [3, 3, 3, 3, 1]
    let output = getModeFrom(input);
    expect (output).toEqual([3])
})