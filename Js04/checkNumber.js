function checkNumber(a) {
    if(a < 5) {
        console.log("faible");
    } else if (a === 5 || a === 6) {
        console.log("moyen");
    }
}
module.exports = checkNumber(5);