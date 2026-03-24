// //left rataion by 1

// let arr=[1,2,3,4,5]
// let copy=arr[0]
// for (let index = 0; index < arr.length-1; index++) {
//     arr[index]=arr[index+1]
    
    
// }
// arr[arr.length-1]=copy
// console.log(arr);

//right rotation by 1
let arr=[1,2,3,4]
let copy=arr[arr.length-1]
for (let i = arr.length-1; i >0; i--) {
  arr[i]=arr[i-1]
    
}
arr[0]=copy

console.log(arr);