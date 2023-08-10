let runningTotal = 0;
let symbol;
let buffer = 0




const buttons = document.querySelectorAll('.num')
const divideBtn = document.querySelector('#btn-divide')
const multiplyBtn = document.querySelector('#btn-multiply')
const addBtn = document.querySelector('#btn-add')
const subtractBtn = document.querySelector('#btn-sub')
const equalsBtn =document.querySelector('#btn-equals')
const display = document.querySelector('.display')
const clearbtn = document.querySelector('#btn-clear')
const delBtn = document.querySelector('#btn-delete')

//default preview
display.textContent = buffer




//Listing for button push
buttons.forEach((button)=>  {
    button.addEventListener('click', displayInput)
})
divideBtn.addEventListener('click', symbolHandle)
multiplyBtn.addEventListener('click', symbolHandle)
addBtn.addEventListener('click', symbolHandle)
subtractBtn.addEventListener('click', symbolHandle)
clearbtn.addEventListener('click',clearDisplay)
equalsBtn.addEventListener('click', calcFunc)
delBtn.addEventListener('click', deleteFunc)




//stores the operator and clear the screen for new input
function symbolHandle(){
    symbol = this.value
    runningTotal = parseFloat(buffer)
    buffer = 0
    
}
//writes to display
function displayInput(){
    if(buffer == 0){
        buffer = this.value
        display.textContent = buffer
    }else if(buffer > 0){
        buffer = buffer + "" + this.value
        display.textContent = buffer
    }  
}
//calculations
function calcFunc(){
    if (symbol == '+'){
        runningTotal +=  parseFloat(buffer)
        display.textContent = runningTotal
        buffer = runningTotal;
    }else if (symbol == '-'){
        runningTotal -=  parseFloat(buffer)
        display.textContent = runningTotal
        buffer = runningTotal;
    }else if(symbol == '*'){
            runningTotal *=  parseFloat(buffer)
            display.textContent = runningTotal
            buffer = runningTotal;
    }else if(symbol == '/'){
        if(parseFloat(buffer)== 0){
            display.textContent = "Why? Just Why? 0, really?"
            runningTotal = 0;
            buffer = 0;
            symbol = "";
        }else{
            runningTotal /=  parseFloat(buffer)
            display.textContent = runningTotal
            buffer = runningTotal;
        }
    }
}
function clearDisplay(){
    runningTotal = 0;
    buffer = 0;
    symbol = "";
    display.textContent = buffer;
}
function deleteFunc(){
   let x = buffer.toString().split("")
   x.pop()
   buffer = x.join('')
    display.textContent = buffer
}


