let arr=[4,5,6,7,0,1,2]
function searchSortedArray(arr,first,last,target){
  while (first<=last) {
      let mid=Math.floor((first/last/2))
    if (arr[mid]==target) return mid
    if (arr[first]<=arr[mid]) {
        if (target>=arr[first]&&target<=arr[mid]) last=mid
        else first=mid+1
        
    }else{
        if (target>=arr[mid+1]&&target<=arr[last]) first=mid+1
        else last=mid


    }
}
return -1
    
  }
  console.log(searchSortedArray(arr,0,arr.length-1,0));
  