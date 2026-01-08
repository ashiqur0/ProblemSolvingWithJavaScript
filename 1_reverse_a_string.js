/**
 * 1️⃣ Using Built-in Methods (split, reverse, join)
 * ✔ Most common & concise
 * Approach: Convert string to array, Reverse array, Join back to string
 * Pros: Very readable, Fast to write
 * Cons: Uses extra memory, Not allowed sometimes in interviews
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));