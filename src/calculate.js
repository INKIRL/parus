"use strict";

console.log("Привет");

let sum = document.getElementById('sum');

console.log(sum);

sum.addEventListener('click', () => {
    let oprand1 = +document.querySelector('#op1').value;
    let oprand2 = +document.querySelector('#op2').value;

    let result = oprand1 + oprand2;

    document.querySelector('#result').innerHTML = `${result}`;

});
let vch = document.getElementById('vch');

console.log(vch);

vch.addEventListener('click', () => {
    let oprand1 = +document.querySelector('#op1').value;
    let oprand2 = +document.querySelector('#op2').value;

    let result = oprand1 - oprand2;

    document.querySelector('#result').innerHTML = `${result}`;

});

let ymn = document.getElementById('ymn');

console.log(ymn);

ymn.addEventListener('click', () => {
    let oprand1 = +document.querySelector('#op1').value;
    let oprand2 = +document.querySelector('#op2').value;

    let result = oprand1 * oprand2;

    document.querySelector('#result').innerHTML = `${result}`;

});

let ch = document.getElementById('ch');

console.log(ch);

ch.addEventListener('click', () => {
    let oprand1 = +document.querySelector('#op1').value;
    let oprand2 = +document.querySelector('#op2').value;

    let result = oprand1 / oprand2;

    document.querySelector('#result').innerHTML = `${result}`;

});