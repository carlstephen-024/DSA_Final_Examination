//Carl Stephen M. Quilopras
// Initialize an empty array for numbers
let numbers_array = [];

// Prompt user for 10 numbers and add them using push()
for (let i = 0; i < 10; i++) {// Loop to get 10 numbers from the user
    let num = parseInt(prompt(`Enter number ${i + 1}:`));// Prompt user for a number and parse it to an integer if necessary
    numbers_array.push(num);// Push the number into the array
}

// Bubble Sort function with logging of comparisons
function bubbleSort(arr) {//
    let length = arr.length;// Get the length of the array
    for (let i = 0; i < len - 1; i++) {// Outer loop for passes
        for (let j = 0; j < length - 1 - i; j++) {// Inner loop for comparisons
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);// Log the comparison
            if (arr[j] > arr[j + 1]) {// Compare adjacent elements
                // Swap numbers
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];// Swap using destructuring
                console.log(`Swapped: ${arr}`);// Log the array after swap
            }
        }
    }
    return arr;
}

// Sorting the array using Bubble Sort
console.log("Original Array:", numbers_array);
let sorted_array = bubbleSort(numbers_array);
console.log("Sorted Array:", sorted_array);