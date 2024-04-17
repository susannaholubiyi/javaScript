function getCalculation(leftOperand, rightOperand, operator) {


    if (operator == "+") {
        return leftOperand + rightOperand;
    } else if (operator == "-") {
        return leftOperand - rightOperand;
    } else if (operator == "*") {
        return leftOperand * rightOperand;
    } else if (operator == "/") {
        return leftOperand / rightOperand;
    }else return NaN;

}
console.log(getCalculation(5,4,"/"))


function calc(x){
    function secondNumber(a){
        return a * x;
    }
    return secondNumber
}

const calc=  (x) =>{
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
};
console.log(calc(3)(2));

// let result = calc(3);
// console.log(result(2));

function higherOrderfunction(func){
    console.log("higher function");
    func();
}
function lowerOrderFunction(){
    console.log("lower function");
}
higherOrderfunction(lowerOrderFunction)

higherOrderfunction(() =>{console.log("lower function")});

function greetings(greet){
    return function person(name){
        return`Hello ,${name}.${greet}`;
    }
}
console.log(greetings("Good morning!")("Susannah"));