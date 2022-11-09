/**
 * Нахождение максимального значения
 * из трёх переданных элементов
 * @param { Number } op1 первый элемент
 * @param { Number } op2 второй элемент
 * @param { Number } op3 третий элемент
 * @returns { Number }
 */
 function maxElementThree(op1, op2, op3) {
    let mEl = op1;

    // из двух переменных
    if (mEl < op2) {
        mEl = op2;
    }

    // Условие вычисления максимального значения
    // из двух переменных
    if (mEl < op3) {
        mEl = op3;
    }

    // Возврат максимального значения
    return mEl;
}

// Видимость для других файлов и подключени функций
export { maxElementThree };