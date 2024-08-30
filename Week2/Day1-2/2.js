const arr = [1, [1, 2], 3, 4, [3, 4, 5], [1, [1, 2, [1, 2]]]];

// Function to recursively flatten a nested array
function flattenArray(array) {
  return array.reduce((accumulator, currentValue) => {
    // Check if the current value is an array
    if (Array.isArray(currentValue)) {
      // If it's an array, recursively flatten it and concatenate the result with the accumulator
      return accumulator.concat(flattenArray(currentValue));
    } else {
      // If it's not an array, directly concatenate the current value with the accumulator
      return accumulator.concat(currentValue);
    }
  }, []); // Initialize the accumulator as an empty array
}

// Call the flattenArray function with the nested array
const flatArray = flattenArray(arr);

// Log the flattened array to the console
console.log(flatArray);
// Outputs: [1, 1, 2, 3, 4, 3, 4, 5, 1, 1, 2, 1, 2]

//Approach 2

// const arr = [1, [1, 2], 3, 4, [3, 4, 5], [1, [1, 2, [1, 2]]]];

// function flattenArray(array) {
//     // Initialize an empty array to store the flattened values
//     const flatArray = [];
//     // Create a stack and push the original array onto it
//     const stack = [...array];

//     // Process each item in the stack until it's empty
//     while (stack.length) {
//         // Pop the last item from the stack
//         const currentValue = stack.pop();

//         // If the current value is an array, push its elements onto the stack
//         if (Array.isArray(currentValue)) {
//             stack.push(...currentValue);
//         } else {
//             // If the current value is not an array, add it to the flatArray
//             flatArray.push(currentValue);
//         }
//     }

//     // Reverse the result to maintain the original order
//     return flatArray.reverse();
// }

// const flatArray = flattenArray(arr);
// console.log(flatArray);
// Outputs: [1, 1, 2, 3, 4, 3, 4, 5, 1, 1, 2, 1, 2]
