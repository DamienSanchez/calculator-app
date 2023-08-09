
let firstNum;
let secondNum;
let operand;
//add
function add(a,b){
    return a + b;
}
//subtract
function subtract(a,b){
    return a - b;
}
//multiply
function multiply(a,b){
    return a * b;
}
//divide
function divide(a,b){
    return a / b;
}

function operator(a,b,symbol){
    if (symbol == '+'){
        console.log(add(a,b))
    }else if (symbol == '-'){
        console.log(subtract(a,b))
    }else if(symbol == '*'){
        console.log(multiply(a,b))
    }else{
        console.log(divide(a,b))
    }
}