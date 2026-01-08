/**
 * 🔥 Interview Tip (Important)
 * If interviewer asks: “Most efficient solution?” 👉 Set or Map → O(n)
 * If interviewer says: “Without using Set or Map?” 👉 for loop + object
 */

/**
 * Problem 5: Remove Duplicates from an Array
 * Write a function that removes all duplicate numbers from an array.
 */

/**
 * 1️⃣ Using Set (Best & Most Common Modern Approach)
 * Pros: 
 * ✅ Clean & concise
 * ✅ Preserves order
 * 
 * Cons: 
 * ❌ Requires understanding of Set
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
