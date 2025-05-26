//Carl Stephen M. Quilopras
// Declare two variables using prompt()
let word1 = (prompt("Enter first word:"));// input 'RACECAR'
let word2 = (prompt("Enter second word:"));// input 'RECORDER'
// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");// Split the string into characters, reverse them, and join them back into a string
}
// Reverse the words
let reversed_word1 = reverseString(word1);
let reversed_word2 = reverseString(word2);

// Log original and reversed strings
console.log("Original word 1:", word1);
console.log("Reversed word 1:", reversed_word1);
console.log("Is word 1 a palindrome or not?", word1 === reversed_word1);// Check if the original word is a palindrome

console.log("Original word 2:", word2);
console.log("Reversed word 2:", reversed_word2);
console.log("Is word 2 a palindrome or not?", word2 === reversed_word2);// Check if the original word is a palindrome