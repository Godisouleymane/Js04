function checkSign(n) {
    if (n % 2 != 0) {
        console.log("Negatif");
    } else {
        console.log("Positif");
    }
}
module.exports = checkSign(5);
