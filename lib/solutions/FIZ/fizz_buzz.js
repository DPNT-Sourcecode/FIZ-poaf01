'use strict';

function isDeluxe(number) {
    const s = new Set();
    (number + '').split('').forEach(c => s.add(c));

    if (s.size >= 1) {
        return false;
    }
    return true;
}

module.exports = function (number) {
    let isFizz = false;
    let isBuzz = false;
    const strNum = number + '';

    if (strNum.indexOf('3') > -1) {
        isFizz = true;
    }
    if (strNum.indexOf('5') > -1) {
        isBuzz = true;
    }

    if (number % 3 === 0) {
        isFizz = true;
    }

    if (number % 5 === 0) {
        isBuzz = true;
    }

    if (isFizz && isBuzz) {
        return "fizz buzz";
    } else if (isFizz) {
        return "fizz";
    } else if (isBuzz) {
        return "buzz";
    } else {
        return strNum;
    }
};
