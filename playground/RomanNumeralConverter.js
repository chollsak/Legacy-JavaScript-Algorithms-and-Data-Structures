var numeralCodes = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds
    ["", "M", "MM", "MMM"] // Thousands
];

function convertToRoman(num) {
    var numeral = "";
    var digits = num.toString().split('').reverse();
    console.log(digits)
    for (var i = 0; i < digits.length; i++) {
        numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
        console.log(numeral)
    }
    return numeral;
}

console.log(convertToRoman(403)); // Output: MMMCMXCIX
