'use strict';
const inputs = document.querySelectorAll('input');
const result = document.querySelector('#res');
let symbols = ["=","C"];

function calc(input){
    const value = input.value;
    let index = symbols.indexOf(value);
    
    index<0?result.value=`${result.value}${value}`:(
        value==symbols[0]?result.value = eval(result.value):result.value = ""
        );
}