// Complete the digitSum function below.
function digitSum(n) {

    if(n.length ==1) return n

    var total = 0;

    for (let i = 0; i < n.length; i++){
        total += parseInt( n[i]);
    }

    return digitSum(total.toString())

}

function superDigit(n, k) {
    var total = 0;

    for (var i = 0; i < n.length; i++){
        total += parseInt(n[i])
    }
    total *= k;
    return digitSum(total.toString())
}

function superDigitAlternate(n, k) {
    var newN = BigInt(n);
    var newK = BigInt(k);
    newN = newN % (9n);
    newK = newK % (9n);
    var SN=  (newN * newK) % 9n;
    return (SN || 9)

}