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
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/**
 * 2️⃣ Using for Loop + includes() (Interview-Friendly)
 * Pros: ✅ Easy to explain
 * Cons: ❌ includes() makes it O(n²)
 */
// const removeDuplicates = arr => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/**
 * 3️⃣ Using for Loop + Object (Hash Map)
 * Pros: ✅ Fast lookups, Fast lookups
 * Cons: ❌ Keys converted to strings
 */
// const removeDuplicates = arr => {
//     const seen = {};
//     const results = [];

//     for (let num of arr) {
//         if (!seen[num]) {
//             seen[num] = true;
//             results.push(num);
//         }
//     }

//     return results;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/**
 * 4️⃣ Using filter() + indexOf()
 * Pros: ✅ Short & readable
 * Cons: ❌ Inefficient for large arrays (O(n²))
 */
// const removeDuplicates = arr => {
//     return arr.filter((num, index) => arr.indexOf(num) === index);
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/**
 * 5️⃣ Using reduce() (Functional Programming)
 * Pros: ✅ Shows functional skills
 * Cons: ❌ Still O(n²)
 */
const removeDuplicates = arr => {
    return arr.reduce((unique, num) => {
        if (!unique.includes(num)) {
            unique.push(num);
        }
        return unique;
    }, []);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));