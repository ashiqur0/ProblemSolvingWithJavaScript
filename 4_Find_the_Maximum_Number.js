/**
 * If interviewer asks: “Find max without using built-in methods” 👉 Use for loop or for...of
 * If interviewer says: “Write clean modern JavaScript” 👉 Use Math.max() or reduce()
 */

/**
 * Problem 4: Find the Maximum Number
 * Write a function that takes an array of numbers and returns the largest number.
 */

/**
 * 1️⃣ Using a for Loop (Most Interview-Friendly)
 * 
 * Pros:
 * ✅ No built-ins
 * ✅ Best choice in interviews
 */
// function findMax(arr) {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log(findMax([5, 1, 9, 3]));

/**
 * 2️⃣ Using for...of Loop (Clean & Modern)
 * 
 * Pros:
 * ✅ Handles negative numbers safely
 * ✅ Very readable
 */
// const findMax = arr => {
//     let max = -Infinity;

//     for (const num of arr) {
//         if(num > max) {
//             max = num;
//         }
//     }
//     return max;
// }
// console.log(findMax([5, 1, 9, 3]));

/**
 * 3️⃣ Using Math.max() with Spread Operator
 * 
 * Pros: Short and clean
 * Cons: Can fail for very large arrays (stack limit)
 */
const findMax = arr => {
    return Math.max(...arr);
}
console.log(findMax([5, 1, 9, 3]));