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

const PRIME_INTEGERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];

function checkIfDivisibleBy(numerator: number, denominator: number): boolean {
    return numerator % denominator === 0;
}

function findPrimeFactors(num: number): number[] {
    if (PRIME_INTEGERS.includes(Math.abs(num))) return [];
    return PRIME_INTEGERS.filter((n) => checkIfDivisibleBy(num, n));
}

function sumOfDivided(lst: number[]): number[][] {
    const primeFactors = lst.map(findPrimeFactors);

    console.log(primeFactors);

    // create a finalArr
    // for each int, create a newArr like this [int, 0]
    // for each num in list[]
    // check if the num divides by the int
    // if it does, increment the int at the second position by the value of the num
    // push this newArr of two ints onto the finalArr

    // sort the finalArr by the values at newArr[1] (the first of the two in each subarray) and return it
    return [];
}

console.log(sumOfDivided([12, 15])); // [ [2, 12], [3, 27], [5, 15] ]
console.log(sumOfDivided([15, 21, 24, 30, 45])); // [ [2, 54], [3, 135], [5, 90], [7, 21] ]

// Simple positive numbers test case
console.log(sumOfDivided([4, 6])); // [[2, 10], [3, 6]]

// Test case with negative numbers
console.log(sumOfDivided([15, -30])); // [[2, -30], [3, -15], [5, -15]]

// Test case where sums become zero
console.log(sumOfDivided([15, -15])); // [[3, 0], [5, 0]]
