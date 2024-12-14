// determine if n is a square number or not
const isSquare = function (n: number) {
    if (n <= 0) return false;
    return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare);
