const result = document.querySelector('#result-text')

function getEvenNumbers(min, max) {
    evenNums = [];
    for (var i = min; i <= max; i++) {
        if (i % 2 == 0) {
            evenNums.push(i);
        }
    }
    return evenNums;
}

function startCalculation() {
    var error = "";
    var val1 = document.getElementById("number1").value;
    var num1 = parseInt(val1, 10);
    if (val1 === "" || isNaN(val1)) {
        error = "Number 1 input " + val1 + " is not a valid number&#13;&#10;"
    } else if (num1 < 2 || num1 > 100) {
        error = "Number 1 input " + num1.toString() + " is not in the range of 2 and 100&#13;&#10;"
    }
    var val2 = document.getElementById("number2").value;
    var num2 = parseInt(val2, 10);
    if (val2 === "" || isNaN(val2)) {
        error = error + "Number 2 input " + val2 + " is not a valid number&#13;&#10;"
    } else if (num2 < 2 || num2 > 100) {
        error = error + "Number 2 input " + num2.toString() + " is not in the range of 2 and 100&#13;&#10;"
    }
    if (error) {
        result.style.color = "red";
        result.innerHTML = error;
    } else {
        result.style.color = "blue";
        var res;
        var content;
        if (num1 < num2) {
            res = getEvenNumbers(num1, num2);
        } else {
            res = getEvenNumbers(num2, num1);
        }
        var content = "There are " + res.length.toString() + " even numbers:&#13;&#10;"
        if (res.length > 0) {
            content = content + res[0].toString()
            for (var i = 1; i < res.length; i++) {
                content = content + "," + res[i].toString()
            }
        }
        result.innerHTML = content;
    }
}