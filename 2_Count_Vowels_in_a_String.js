/**
 * 🔥 Interview Tip:
 * To write the most optimal solution: 👉 Use for loop + Set
 * If asked to write clean modern JS: 👉 Use for...of or reduce()
 */

/**
 * Problem Statement: Count the number of vowels (a, e, i, o, u) in a given string.
 */

/**
 * 1️⃣ Using for Loop (Most Interview-Friendly)
 * ✅ Best choice when interviewer says: “no fancy methods”
 */

const countVowels = str => {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}
console.log(countVowels('programming'));