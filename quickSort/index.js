let arr=[7,3,4,5,6,2,1]
let pivot=arr[0]

for (let i = 1; i < arr.length; i++) {
    if (arr[i]>pivot) {
        arr[i]=arr[i+1]
        
    }
    
    
}
console.log(arr);
