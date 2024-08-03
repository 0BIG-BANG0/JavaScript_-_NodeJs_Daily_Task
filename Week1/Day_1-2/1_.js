//Approach 1 : Efficient Approach
// function palindrome(name) {
//   let j = name.length - 1;
//   for (let i = 0; i < name.length/2; i++) {
//     if(name[i] != name[j]){
//         return false
//     }
//     j--;
//   }
//   return true;
// }
// console.log(palindrome("maham"))

//Approach 2 make a rev string and Compare it

// function palindrome(str){
//     let rev = ""
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     if(str==rev){
//         console.log("It is Palindrome")
//     }else{
//         console.log("It is not Palindrome")
//     }
// }
// palindrome("maham")

//Approach 3 : Using Inbuilt method ex split(), reverse(), & join()

// function palindrome(str){
//     let rev = str.split().reverse().join("")

//     if(rev==str){
//         console.log("It is Palindrome")
//     }else{
//         console.log("It is not Palindrome")
//     }
// }
// palindrome("maham")

// Solution 
// Use inbuilt string methods like split() to split the string into characters array
// Reverse the array using reverse() method
// Join the array into a string using join() method
// Store this value inside another variable
// Compare the values and return true if both are equal