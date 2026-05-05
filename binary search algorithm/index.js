// // binary search 
// let arr=[1,2,4,6,8,14,23,45]

// let index= binarySearch(arr,0,arr.length-1,4) 
// if (index==-1) {
//     console.log("not found");
    
    
// }else{
//     console.log("target found at " +index+ "index");
    
// }
// function binarySearch(arr,first,last,target) {
//     let mid=Math.floor((first+last)/2)
//     while (first<=last) {
//         if (arr[mid]===target) return mid
//         if (arr[mid]>target) return last=mid-1
//         else first=mid+1

        
//     }
//     return -1
// }
let nums=[-1,0,3,5,9,12]
var search = function(nums, target) {

    let index=binarySearch(nums,0,nums.length-1,target)
    if(index==-1) return "Not Found"
    else return "the index is at "+index+ "index"
    
};
function binarySearch(nums,first,last,target){
   
    while(first<=last){
         let mid=Math.floor((first+last)/2)
          if(nums[mid]==target) return mid
          else if(nums[mid]>target) last=mid-1
          else first=mid+1
        console.log("i");
        

    }
    return -1
  
}

console.log(search(nums,9));
