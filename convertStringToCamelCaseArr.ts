// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCaseArr(str: string): string {
    if (str === '') return ''
    const delimiterRegex = /[-_]/
    const wordArray = str.split(delimiterRegex)
    const newArray: string[] = []

    const capitaliseWord = (word: string): string => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    if (wordArray[0][0].match(/[A-Z]/)) {
        newArray.push(capitaliseWord(wordArray[0]))
    } else {
        newArray.push(wordArray[0])
    }

    for (let i = 1; i < wordArray.length; i++) {
        newArray.push(capitaliseWord(wordArray[i]))
    }

    return newArray.join('')
}

console.log(toCamelCaseArr(''))
console.log(toCamelCaseArr("the_stealth_warrior_beast-mode"))
console.log(toCamelCaseArr("The-Stealth-Warrior"))
console.log(toCamelCaseArr("A-B-C"))