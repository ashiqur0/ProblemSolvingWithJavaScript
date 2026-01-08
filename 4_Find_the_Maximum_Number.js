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
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([5, 1, 9, 3]));
