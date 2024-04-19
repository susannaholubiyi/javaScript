function addNumbers(x, y){
    let answer = x + y;
    return answer;
}
// addNumbers(2, 3)
// if you have more than one function you want to export, wrapp it in curly braces

function evenNumbers(numbers){
    let result =  numbers.filter(number => number % 2 == 0);
    return result;
}
module.exports ={addNumbers, evenNumbers};
