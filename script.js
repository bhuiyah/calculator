const numbers = document.querySelectorAll('.number');
console.log(numbers[1]);
const operations = document.querySelectorAll('.operation');
console.log(operations);




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
        add(num1, num2);
    }
    else if(operator == 'subtract'){
        subtract(num1, num2);
    }
    else if(operator == 'multiply'){
        multiply(num1, num2);
    }
    else if(operator == 'divide'){
        divide(num1, num2);
    }
}