const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const display = document.querySelector('.display');
const clear = document.querySelector('#Clear')
const allClear = document.querySelector('#allClear')
const equal = document.querySelector('#equal');

let firstNum = 0;
let newNum = 0;
let answer = 0;
let operator = '';
let needRestart = 0;

clear.addEventListener('click', ()=> clearDisplay());
display.textContent = '0';

allClear.addEventListener('click', ()=>clearEverything());

for(const num of numbers){
    num.addEventListener('click', ()=> DisplayNum(num.textContent))
}

for(const ops of operations){
    ops.addEventListener('click', ()=>{
        needRestart = 1;
        if(firstNum == 0){
            operator = ops.id;
            console.log(operator);
            firstNum = display.textContent;
            console.log(firstNum);
        }
        else{
            display.textContent= operate(operator, firstNum, display.textContent);
            operator = ops.id;
        }
    })
}

equal.addEventListener('click', ()=> equalsFunction());

function DisplayNum(x){
    if(needRestart == 1){
        clearDisplay();
    }

    if(display.textContent == 0){
        display.textContent = x;
    }
    else{
        display.textContent+= x;
    }
}

function clearDisplay(){
    display.textContent = '0';
    needRestart = 0;
}

function clearEverything(){
    display.textContent = '0';
    firstNum = '';
}

function equalsFunction(){
    display.textContent = operate(operator, firstNum, display.textContent)
    firstNum = display.textContent;
}














function add(a, b) {
	return (a+b);
};

function subtract(a, b) {
	return(a-b);
};

function multiply(a, b){
    return(a*b);
}

function divide(a, b){
    return(a/b);
}

function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    if(operator == 'add'){
        return add(num1, num2);
    }
    else if(operator == 'subtract'){
        return subtract(num1, num2);
    }
    else if(operator == 'multiply'){
        return multiply(num1, num2);
    }
    else if(operator == 'divide'){
        return divide(num1, num2);
    }
}