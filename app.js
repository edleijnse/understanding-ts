function add(n1, n2, showResult, phraseString) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phraseString + " " + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 250.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
