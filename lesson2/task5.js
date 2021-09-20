'use strict';

/**
 * Функция сложения "а" + "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция вычетания "а" - "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция деления  "a" / "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция умножения "а" * "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция математика.
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation может быть "+", "-", "/", "*".
 * @throws {Error} будет ошибка, если оператор не верен.
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Не верная " + operation + " операция");
    }
}

console.log(mathOperation(2, 5, "+"));
console.log(mathOperation(2, 5, "-"));
console.log(mathOperation(2, 5, "/"));
console.log(mathOperation(2, 5, "*"));
console.log(mathOperation(2, 5, "lorem"));