const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const display = document.querySelector('.display');
const clear = document.querySelector('#Clear')
const allClear = document.querySelector('#allClear')
const equal = document.querySelector('#equal');
const negative = document.querySelector('#negative');
const decimal = document.querySelector('#decimal');

let firstNum = 0;
let newNum = 0;
let answer = 0;
let operator = '';
let chainedOperator = '';
let needRestart = 0;
let onceFlag = true;

clear.addEventListener('click', ()=> clearDisplay());
display.textContent = '0';

allClear.addEventListener('click', ()=>clearEverything());

negative.addEventListener('click', ()=> {
    if(display.textContent != 0){
        display.textContent*=-1;
    }
})

decimal.addEventListener('click', ()=>{
    if(display.textContent.includes('.')){
        return;
    }
    display.textContent+='.';
});

for(const num of numbers){
    num.addEventListener('click', ()=> DisplayNum(num.textContent))
}

for(const ops of operations){
    ops.addEventListener('click', ()=>{
        needRestart = 1;
        chainedOperator = operator;
        operator = ops.id;
        if(firstNum == 0){
            firstNum = display.textContent;
        }
        else{
            if(chainedOperator == ''){return;}
            display.textContent= operate(chainedOperator, firstNum, display.textContent);
            firstNum = display.textContent;
        }
    })
}

equal.addEventListener('click', ()=> equalsFunction());

function DisplayNum(x){
    if(needRestart == 1){
        clearDisplay();
    }
    if(display.textContent === '0'){
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
    if(operator == ''){
        return;
    }
    display.textContent = operate(operator, firstNum, display.textContent)
    firstNum = display.textContent;
    operator = '';
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
        return parseFloat(add(num1, num2).toFixed(4));
    }
    else if(operator == 'subtract'){
        return parseFloat(subtract(num1, num2).toFixed(4));
    }
    else if(operator == 'multiply'){
        return parseFloat(multiply(num1, num2).toFixed(4));
    }
    else if(operator == 'divide'){
        return parseFloat(divide(num1, num2).toFixed(4));
    }
}