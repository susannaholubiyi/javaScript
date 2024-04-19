let num = [12,3,4,5,9,4,5]
num.splice(2,0,2,3);
console.log(num);
let array = [1, 2, 3, 4, 5, 6]
array.forEach((num) => {console.log(num * 2);})
let arr = []

let answer = array.forEach((num)=>{arr.push(num * 2);})
let ans = array.map((num) => num % 2 == 1)
let answerr = array.filter(num => num % 2 == 0).map(num => num * 10)
console.log(arr)
console.log(ans)
console.log(answerr)
