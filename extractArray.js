let rawArr = [[200, 50, 300, 5],[10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]]
console.log(rawArr)
let ans = [rawArr[1][0], rawArr[1][1], rawArr[1][2]]
console.log(ans) 

let user = {
    firstName: "dayo",
    lastName: "miriam",
    age: "20",
    sex: "female"
}
let arr = [1,2,3,4,5,6]

for(const key in user){
    console.log(user[key]);
}

for(const value of arr){
    console.log(value);
}

