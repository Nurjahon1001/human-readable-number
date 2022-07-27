module.exports = function toReadable(number) {
    let arr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        0,
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred",
    ];
    // let hundreds = ['']
    let textA = number.toString().split("");
    let ln = textA.length;
    if (number <= 19 && number >= 0) {
        return arr[number];
    } else if (number >= 20 && number < 100) {
        if (textA[1] === "0") {
            return tens[textA[0]];
        } else {
            return tens[textA[0]] + " " + arr[textA[1]];
        }
    } else if (textA.length === 3) {
        if (textA[2] === "0" && textA[1] === "0") {
            return arr[textA[0]] + " hundred";
        } else if (textA[1] + textA[2] < 20) {
            return (
                arr[textA[0]] + " hundred " + arr[Number(textA[1] + textA[2])]
            );
        } else if (textA[2] === "0") {
            return arr[textA[0]] + " hundred " + tens[textA[1]];
        } else {
            return (
                arr[textA[0]] +
                " hundred " +
                tens[textA[1]] +
                " " +
                arr[textA[2]]
            );
        }
    }
};