// 7 kyu Get the Middle Character

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// Examples:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s: string): string {
    const mid = s.length / 2;
    return s.slice(mid - (s.length % 2 === 0 ? 1 : 0), mid + 1);
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
