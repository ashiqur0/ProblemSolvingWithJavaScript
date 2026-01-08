/**
 * 🔥 Interview Tip 
 * If interviewer says: “Without using filter()” 👉 Use for loop or for...of
 * If interviewer says: “Write clean modern JavaScript” 👉 Use filter()
 */

/**
 * Problem 7: Find Even Numbers in an Array
 * Write a function that returns all even numbers from a given array.
 */

/**
 * 1️⃣ Using for Loop (Most Interview-Friendly)
 * Pros: 
 * ✅ No built-ins
 * ✅ Best interview answer
 */
function getEvenNumbers(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));