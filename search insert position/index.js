function binarySerach(arr,first,last,target) {
    while (first<=last) {
        let mid=Math.floor((first+last)/2)
        if (arr[mid]==target) return mid
        if (arr[mid]<target) first=mid+1
        else last=mid-1
    }
    return first
    
}
let arr=[1,3,5,6]
console.log(binarySerach(arr,0,arr.length,4));
