//Bubble Sort

// let arr=[1,4,2,3,5,9,6]
// let n=arr.length
// for (let i = 0; i < n-1; i++) {
//     for (let j = 0; j < n-1-i; j++) {
//        if (arr[j]>arr[j+1]) {
//         let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
        
//        }
        
//     }
    
// }
// console.log(arr);

//selection sort
let arr=[2,3,14,5,6]
let n=arr.length
for (let i = 0; i < n-1; i++) {
    let minIndx=i    //0
    for (let j = i+1; j < n; j++) {
        if (arr[minIndx]>arr[j]) {
            minIndx=j
            
        }
        console.log(minIndx);
        
       
        
    }
     if (minIndx!=i) {
            let temp=arr[minIndx]
             arr[minIndx]=arr[i]
             arr[i]=temp
            
        }
    
}

console.log(arr);
