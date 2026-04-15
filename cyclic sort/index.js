let arr=[2,5,8,11,12,9,10,4,3,7,1,6]
let i=0
while (i<arr.length) {
    let corInd=arr[i]-1
    if (arr[i]!=arr[corInd]) {
        let temp=arr[i]
        arr[i]=arr[corInd]
        arr[corInd]=temp
        
    }
    else i++
    
}
console.log(arr);
