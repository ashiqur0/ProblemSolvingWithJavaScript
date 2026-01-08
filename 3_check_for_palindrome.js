/**
 * 🔥 Interview Tip (Very Important)
 * If interviewer says: “Don’t use built-in reverse()” 👉 Use two-pointer approach
 * If interviewer says: “Optimize for performance” 👉 Use two-pointer (O(n) time, O(1) space)
 */

/**
 * Problem 3: Check for Palindrome
 * Write a function that checks if a string is a palindrome (reads the same forward and backward).
 */

/**
 * Why interviewers love this
 * ✅ Efficient
 * ✅ Shows algorithmic thinking
 */
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
