// Carl Stephen M. Quilopras
// Paste the following code into a browser console or a JavaScript environment to run it
function array_inputs() {   // Function to handle array inputs and sorting
    let number = prompt("Enter numbers separated by commas:", "24,65,21,5,9,32,42,80,57")
        .split(",").map(Number); // Convert string inputs to numbers

    let name = prompt("Enter names separated by commas:", "Zenvo, Erica, Jordie, Alicia, Redon")
        .split(","); // Convert string inputs to names

    // Merge both arrays into a single array
    let merged_array = [...number, ...name]; // Spread operator to merge arrays
    console.log("Merged Array:", merged_array); // Log the merged array

    // Sort numbers numerically in reverse order
    let sorted_numbers = number.sort((a, b) => b - a); // Sort numbers in descending order
    console.log("Numbers sorted in reverse:", sorted_numbers); // Log the sorted numbers

    // Sort names alphabetically
    let sorted_names = name.sort(); // Sort names in ascending order
    console.log("Names sorted alphabetically:", sorted_names); // Log the sorted names
}

// Call the function
array_inputs();