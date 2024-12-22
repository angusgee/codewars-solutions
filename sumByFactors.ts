// 4 kyu Sum by Factors

// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.
// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]

// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

//     It can happen that a sum is 0 if some numbers are negative!

// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// ========================

function checkIfPrime(num: number): boolean {
    num = Math.abs(num);
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function checkIfDivisibleBy(numerator: number, denominator: number): boolean {
    return numerator % denominator === 0;
}

function findPrimeFactors(num: number): number[] {
    const factors: number[] = [];
    const absNum = Math.abs(num);
    const sqrtNum = Math.sqrt(absNum);

    if (checkIfPrime(absNum)) factors.push(absNum);

    for (let i = 2; i <= sqrtNum; i++) {
        if (checkIfDivisibleBy(absNum, i)) {
            if (checkIfPrime(i)) factors.push(i);
            if (checkIfPrime(absNum / i) && absNum / i !== i) {
                factors.push(absNum / i);
            }
        }
    }
    return factors;
}

function sumOfDivided(lst: number[]): number[][] {
    // Flatten the array of arrays and convert to set
    // to make unique list of prime factors
    const primeFactors = new Set(lst.map(findPrimeFactors).flat().sort());

    let outputArr: number[][] = [];

    primeFactors.forEach((pf) => {
        let pfArr: number[] = [pf, 0];

        lst.forEach((num) => {
            if (checkIfDivisibleBy(num, pf) === true) {
                pfArr[1] += num;
            }
        });
        outputArr.push(pfArr);
    });
    return outputArr.sort((a, b) => a[0] - b[0]);
}

// Ordinary test cases
console.log(sumOfDivided([12, 15])); // [ [2, 12], [3, 27], [5, 15] ]
console.log(sumOfDivided([15, 21, 24, 30, 45])); // [ [2, 54], [3, 135], [5, 90], [7, 21] ]

// Simple positive numbers test case
console.log(sumOfDivided([4, 6])); // [[2, 10], [3, 6]]

// Test case with negative numbers
console.log(sumOfDivided([15, -30])); // [[2, -30], [3, -15], [5, -15]]

// Test case where sums become zero
console.log(sumOfDivided([15, -15])); // [[3, 0], [5, 0]]
