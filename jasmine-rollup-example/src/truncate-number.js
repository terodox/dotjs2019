const BASE_NUMBERS = {
    E: 1000000000000000000, // quintillion
    Q: 1000000000000000, // quadrillion, standard symbol is 'P'
    T: 1000000000000, // trillion
    B: 1000000000, // billion, standard symbol is 'G'
    M: 1000000, // million
    k: 1000, // thousand
    '': 1
};

function localizeNumber(numberToLocalize) {
    return new Intl.NumberFormat().format(numberToLocalize);
}

export function truncateNumber(numberToTruncate) {
    const roundedInput = Math.round(numberToTruncate);``

    if (numberToTruncate === null || isNaN(roundedInput)) {
        return '-';
    }

    if (roundedInput === 0 || roundedInput === -0) {
        return '0';
    }

    if (Math.abs(roundedInput) >= BASE_NUMBERS.E) {
        return localizeNumber(roundedInput);
    }

    let truncatedNumber;
    let numberKey = '';
    for (const key of Object.keys(BASE_NUMBERS)) {
        if (Math.abs(roundedInput) >= BASE_NUMBERS[key]) {
            truncatedNumber = roundedInput / BASE_NUMBERS[key];
            numberKey = key;
            break;
        }
    }

    const dotIndex = Math.abs(truncatedNumber)
        .toString()
        .indexOf('.');

    let fixedNumberString;
    if (dotIndex === 1) {
        fixedNumberString = truncatedNumber.toFixed(2);
    } else if (dotIndex === 2) {
        fixedNumberString = truncatedNumber.toFixed(1);
    } else {
        fixedNumberString = truncatedNumber.toFixed(0);
    }

    const fixedNumber = parseFloat(fixedNumberString);
    const localizedNumber = localizeNumber(fixedNumber);

    return localizedNumber + numberKey;
}