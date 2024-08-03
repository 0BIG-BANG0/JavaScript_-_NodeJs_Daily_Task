// Geeks for Geeks
// Table of Content

// Approach 1: Iterative Method
// Approach 2: Recursive Method
// Approach 3: Memoization Method

function fact(num) {
  if (num == 0) {
    return 1;
  }

  let factnum = 1;
  for (let i = num; i >= 1; i--) {
    factnum = factnum * i;
  }
  return factnum;
}
console.log(fact(1));
