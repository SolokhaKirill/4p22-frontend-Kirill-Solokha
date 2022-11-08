'use strict'

const button = document.getElementById('button'); 

button.addEventListener('click', (event) => {
event.preventDefault();
let result;
const numberOne = document.getElementById('numberOne').value;
const numberTwo = document.getElementById('numberTwo').value;
const operator = document.getElementById('operator').value;

switch(operator.trim()) {
    case '': result = 'Не введён знак';
    break;
    case '+': result = Number(numberOne) + Number(numberTwo);
    break;
    case '-': result = Number(numberOne) - Number(numberTwo);
    break;
    case '*': result = Number(numberOne) * Number(numberTwo);
    break;
    case '/': result = Number(numberOne) / Number(numberTwo);
    break;
    default: result = 'Программа не поддерживает такую операцию';
    break;
};

if (numberTwo.trim() === '') {
    result = 'Второе число не указано';
};

if (numberOne.trim() === '') {
    result = 'Первое число не указано';
};

if (isNaN(numberOne) || isNaN(numberTwo)) {
    result = 'Некорректный ввод чисел';
};

if (result === Infinity) {
    result = 'Операция не корректна';  
};

if (result !== 'Программа не поддерживает такую операцию' && result !== 'Первое число не указано' && result !== 'Второе число не указано' && result !== 'Некорректный ввод чисел' && result !== 'Не введён знак' && isNaN(result)) {
    result = 'Операция не корректна';
};

console.log(result)
});