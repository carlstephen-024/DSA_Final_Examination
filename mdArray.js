// Carl Stephen M. Quilopras

function multi_dimentional_array() {    // function to create a multi-dimensional array
    let names = prompt("Enter names (separated by commas):", "Genevieve, Juan, Luna, Gabriel, Elise")
        .split(","); // Convert string inputs to names

    let ages = prompt("Enter ages (separated by commas):", "24, 65, 21, 5, 9")
        .split(",").map(Number); // Convert string inputs to numbers

    // Restructure the multi-dimensional array
    let structured_array = names.map((name, index) => [name, ages[index]]); // Pair each name with its corresponding age

    // Log the restructured multi-dimensional array
    console.log("Restructured Multi-Dimensional Array:");
    structured_array.forEach(sub_array => console.log(sub_array)); // Log each sub-array

    return structured_array; // Return the array for potential further use
}

// Call the function
multi_dimentional_array();