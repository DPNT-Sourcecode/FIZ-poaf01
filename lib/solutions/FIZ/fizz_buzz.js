'use strict';

function isDeluxeCheck(number) {
    if (number <= 10) {
        return false;
    }

    const s = new Set();
    (number + '').split('').forEach(c => s.add(c));

    if (s.size > 1) {
        return false;
    }
    return true;
}

module.exports = function (number) {
    let isFizz = false;
    let isBuzz = false;
    let isDeluxe = isDeluxeCheck(number);
    let deluxeEdition = number % 2 === 1 ? 'fake deluxe' : 'deluxe';
    let result = '';
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
        result = "fizz buzz";
    } else if (isFizz) {
        result = "fizz";
    } else if (isBuzz) {
        result = "buzz";
    }

    if (isDeluxe) {
        if(result == '') {
            return deluxeEdition;
        } else {
            return result + ' ' + deluxeEdition;
        }
    } else {
        if (result == '') {
            return strNum;
        } else {
            return result;
        }
    }
};



