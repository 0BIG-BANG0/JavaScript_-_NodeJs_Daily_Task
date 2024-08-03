// Gog
// Table of Content 

// 1. Using Brute force Approach
// 2. Using Math.max() and apply() Methods
// 3. Using reduce() Method
// 4. Using sort() Method
// 5. Using Recursion
// 6. Using the forEach Method
// 7. Using the Spread Operator

// Approach 1 : Brute Force

// function findMax(arr) {
//   if (arr.length === 0) {
//     return -1;
//   }
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// const arr = [1, 2, 66, 8, 7, 5];
// console.log(findMax(arr));

//*************************** */

// Using the Spread Operator


// function findMax(arr) {
//     if (arr.length === 0) {
//       return -1;
//     }
//     return Math.max(...arr);
// }
// const arr = [1, 2, 66, 8, 7, 5];
// console.log(findMax(arr));