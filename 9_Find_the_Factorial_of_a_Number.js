/**
 * 🔥 Interview Tips (Very Important)
 * If interviewer says: “Find factorial without recursion” 👉 Use for loop
 * If interviewer says: “Explain recursion clearly” 👉 Use recursive solution
 */

/**
 * Problem 9: Find the Factorial of a Number
 * Write a function that calculates the factorial of a number using a loop.
 */

/**
 * 1️⃣ Using for Loop (Most Interview-Friendly)
 * Pros: 
 * ✅ Simple
 * ✅ No recursion
 * ✅ Best interview answer
 */
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));