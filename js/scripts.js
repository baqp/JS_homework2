'use strict';
const inputs = document.querySelectorAll('input');
const result = document.querySelector('#res');

function calc(input){
    const value = input.value;
    switch (value){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
        result.value = `${result.value}${value}`;
        break;
        case 'C':
        result.value = "";
        break;
        case '=': 
        result.value = eval(result.value);
        break;
    }
}