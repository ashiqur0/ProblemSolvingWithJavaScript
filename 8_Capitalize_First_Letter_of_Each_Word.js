/**
 * 🔥 Interview Tip (Important)
 * If interviewer says: “No built-in methods” 👉 Use for loop
 * If interviewer says: “Handle edge cases” 👉 Use regex solution
 */

/**
 * Problem 8: Capitalize First Letter of Each Word
 * Write a function that capitalizes the first letter of each word in a string.
 */

/**
 * 1️⃣ Using charAt() + slice() (Best Interview Answer)
 * Pros: 
 * ✅ Clean
 * ✅ Easy to explain
 */
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirst("hello world"));
