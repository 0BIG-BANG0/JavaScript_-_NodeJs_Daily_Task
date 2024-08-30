const arr = [1,2,3,4,5]

// let map = function(arr){
//     const newMap = []
//     for(let i=0;i<arr.length;i++){
//         newMap[i] = arr[i] ** 2
//     }
//     return newMap
// }
let map = (arr)=>{
    const newMap = []
    for(let i=0;i<arr.length;i++){
        newMap[i] = arr[i] ** 2
    }
    return newMap
}


// let map = customMap(arr)
console.log(map(arr))