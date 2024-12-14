// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1: string, str2: string): boolean {
    if (str1.length < str2.length) return false

    // create str1 char map
    const map: { [key: string]: number } = {
    }

    for (let i = 0; i < str1.length; i++) {
        // if letter not already in the char map, add it, else increment by one
        if (!map[str1[i]]) {
            map[str1[i]] = 1
        } else {
            map[str1[i]] += 1
        }
    }

    for (let i = 0; i < str2.length; i++) {
        // if the letter isn't in the str1 char map, return false
        if (!map[str2[i]]) return false
        // if it is in the obj, decrement the value by one
        if (map[str2[i]]) {
            map[str2[i]] -= 1
        }
        // check if the value is negative
        if (map[str2[i]] < 0) return false
    }
    // console.log(`map for string ${str1}: `, map)
    return true;
}

console.log(scramble('rkq', 'world'))
console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))

