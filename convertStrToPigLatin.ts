// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str: string): string {
//     const wordArr: string[] = str.split(" ");
//     const pigLatinArr: string[] = [];
//     for (const word of wordArr) {
//         if (!/^[A-Za-z]+$/.test(word)) {
//             pigLatinArr.push(word);
//         } else {
//             const firstLetter = word[0];
//             let pigLatinWord = word.slice(1) + firstLetter;
//             pigLatinWord = pigLatinWord + "ay";
//             pigLatinArr.push(pigLatinWord);
//         }
//     }
//     return pigLatinArr.join(" ");
// }

const pigIt = (a: string): string => {
    return a
        .split(" ")
        .map((str) =>
            /[A-Za-z]+/.test(str) ? str.slice(1) + str.charAt(0) + "ay" : str
        )
        .join(" ");
};

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
