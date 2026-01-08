/**
 * 🔥 Interview Tip (Important)
 * If interviewer asks: “Without using reduce() or built-ins” 👉 Use for loop or for...of
 * If interviewer says: “One-liner solution” 👉 Use reduce()
 */

/**
 * Problem 6: Sum of All Numbers in an Array
 * Write a function that returns the sum of all numbers in an array.
 */

/**
 * 1️⃣ Using for Loop (Most Interview-Friendly)
 * Pros: 
 * ✅ Simple
 * ✅ No built-in methods
 * ✅ Best interview answer
 */
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4]));