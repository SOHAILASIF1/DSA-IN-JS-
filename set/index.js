//print the unique vale
let arr=[12,34,12,56,43,56,43]
let set=new Set()
for (let i = 0; i < arr.length; i++) {
   if (set.has(arr[i])) {
    set.delete(arr[i])
    
   } else set.add(arr[i])
    
}
console.log(set);
