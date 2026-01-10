/**
 * 🔥 Interview Tip:
 * To write the most optimal solution: 👉 Use for loop + Set
 * If asked to write clean modern JS: 👉 Use for...of or reduce()
 */

/**
 * Problem Statement: Count the number of vowels (a, e, i, o, u) in a given string.
 */

/**
 * 1️⃣ Using for Loop (Most Interview-Friendly)
 * ✅ Best choice when interviewer says: “no fancy methods”
 */
// const countVowels = str => {
//     let count = 0;
//     const vowels = 'aeiouAEIOU';

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countVowels('programming'));

/**
 * 2️⃣ Using for...of Loop (Clean & Modern)
 * ✅ Very readable
 * ✅ Works well with Unicode characters
 */
// const countVowels = str => {
//     let count = 0;
//     const vowels = 'aeiouAEIOU';

//     for (const char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels('programming'));

/**
 * 3️⃣ Using reduce() (Functional Approach)
 * Interview insight:
 * This shows you understand accumulator-based logic.
 */

// const countVowels = str => {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     return str.split('').reduce((count, char) => {
//         return vowels.includes(char) ? count + 1: count;
//     }, 0);
// }
// console.log(countVowels('programming'))

/**
 * 4️⃣ Using Regular Expression (Concise & Powerful)
 * Pros: Very short
 * Cons: Regex knowledge required
 */
// const countVowels = str => {
//     const matches = str.match(/[aeiou]/gi);
//     return matches? matches.length : 0;
// }
// console.log(countVowels('programming'));

/**
 * 5️⃣ Using filter() Method
 * Pros: Easy to understand
 * Cons: Creates intermediate array
 */
// const countVowels = str => {
//     const vowels = 'aeiouAEIOU';
//     return str.split('').filter(char => vowels.includes(char)).length;
// }
// console.log(countVowels('programming'));

/**
 * 6️⃣ Using Set (Optimized Lookups)
 * Pros: O(1) lookup, Good for large datasets
 */
const countVowels = str => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for (const char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('programming'));