// 2.2.1 Calculs rapides

let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
let numInt = parseInt(num);

// calculate with loop

function calculateFactorial(numInt) {
    var result = numInt;
    if (numInt === 0 || numInt === 1)
        return 1;
    while (numInt > 1) {
        numInt --;
        result *= numInt;
    }
    return result;
}

// calculate with recursion
function calculateFactorial(numInt) {
    if (numInt === 0 || numInt === 1) {
        return 1;
    }
    return numInt * calculateFactorial(numInt - 1);
}

console.log(calculateFactorial(numInt));