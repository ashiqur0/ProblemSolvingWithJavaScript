/**
 * 1️⃣ Using Built-in Methods (split, reverse, join)
 * ✔ Most common & concise
 * Approach: Convert string to array, Reverse array, Join back to string
 * Pros: Very readable, Fast to write
 * Cons: Uses extra memory, Not allowed sometimes in interviews
 */
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));


/**
 * 2️⃣ Using a for Loop (Iterative)
 * ✔ Interview-friendly (no built-ins)
 * Approach: Traverse string from end to start, Build reversed string
 * Pros: Easy to understand, No extra methods
 * Cons: String concatenation can be slower for large strings
 */

// const reverseString = str => {
//     let reversedStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }

//     return reversedStr;
// }

// console.log(reverseString('hello'));

/**
 * 3️⃣ Using for...of Loop
 * ✔ Clean & modern JavaScript
 * Approach: Loop through characters, Add each character at the beginning
 * Pros: Very readable, Works with Unicode characters
 */
// const reverseString = str => {
//     let reversedStr = '';
//     for (const char of str) {
//         reversedStr = char + reversedStr;
//     }

//     return reversedStr;
// }

// console.log(reverseString('hello'));

/**
 * 4️⃣ Using reduce()
 * ✔ Functional programming style
 * Pros: Elegant, Shows functional knowledge
 * Cons: Less readable for beginners
 */

const reverseString = str => {
    return str.split('').reduce((rev, char) => char + rev, '');
}

console.log(reverseString('hello'));