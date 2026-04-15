
//1 to n [1,n]
// let arr=[2,5,8,11,12,9,10,4,3,7,1,6]
// let i=0
// while (i<arr.length) {
//     let corInd=arr[i]-1
//     if (arr[i]!=arr[corInd]) {
//         let temp=arr[i]
//         arr[i]=arr[corInd]
//         arr[corInd]=temp
        
//     }
//     else i++
    
// }
// console.log(arr);

//0 to n-1 [0,n-1]
// let arr=[2,0,5,8,11,12,9,10,4,3,7,1,6]
// let i=0
// while (i<arr.length) {
//     let corInd=arr[i]
//     if (arr[i]!=arr[corInd]) {
//         let temp=arr[i]
//         arr[i]=arr[corInd]
//         arr[corInd]=temp
        
//     }
//     else i++
    
// }
// console.log(arr);

//missing number find
let arr=[2,3,0]
let i =0
while (i<arr.length) {
    let corIdx=arr[i]
    if (arr[i]<arr.length && arr[i]!=arr[corIdx]) {
        let temp=arr[i]
        arr[i]=arr[corIdx]
        arr[corIdx]=temp
        
    }
    for (let j = 0; j < arr.length; j++) {
       if (j!=arr[j]) return j
        
    }
    return arr.length
    
}
console.log(j);

