"use strict";

// Задача запросить у пользователя
// 5 чисел и найти наибольшее среди 3 чисел
// 2 групп:
//      1 группа: operand1, operand2, operand3
//      2 группа: operand4, operand1, operand5

let operand1 = +prompt("Введите 1 число: ");
let operand2 = +prompt("Введите 2 число: ");
let operand3 = Number(prompt("Введите 3 число: "));
let operand4 = +prompt("Введите 4 число: ");
let operand5 = +prompt("Введите 5 число: ");

// Обращаем внимание на функцию "Number" -
// перевод значения в поле на число!

// Обращаем внимание на вывод в консоли
console.log(operand1, operand2, operand3);

// Условие вычисления максимального значения 1 группы
let maxEl = operand1;

// из двух переменных
if (maxEl < operand2) {
    maxEl = operand2;
}

// Условие вычисления максимального значения
// из двух переменных
if (maxEl < operand3) {
    maxEl = operand3;
}

// Вывод результата
alert("Максимальное значение: " + maxEl);

// Условие вычисления максимального значения 2 группы
let maxEl2 = operand4;

// из двух переменных
if (maxEl2 < operand1) {
    maxEl2 = operand1;
}

// Условие вычисления максимального значения
// из двух переменных
if (maxEl2 < operand5) {
    maxEl2 = operand5;
}

// Вывод результата
alert("Максимальное значение: " + maxEl2);