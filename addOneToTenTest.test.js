let {addOneTo} = require("./addOneToTens.js");

test ("add one to the last number in an array", ()=> {
    let arr = [5, 2, 3, 1, 2];
    let answer = addOneTo(arr) ;
    expect (answer).toStrictEqual([5, 2, 3, 1, 3]);

})

test ("add one to the last number in an array", ()=> {
    let arr = [2, 4, 0, 9, 9];
    let answer = addOneTo(arr) ;
    expect (answer).toStrictEqual([2, 4, 1, 0, 0]);

})