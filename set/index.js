//print the unique vale
// let arr=[12,34,12,56,43,56,43]
// let set=new Set()
// for (let i = 0; i < arr.length; i++) {
//    if (set.has(arr[i])) {
//     set.delete(arr[i])
    
//    } else set.add(arr[i])
    
// }
// console.log(set);

// check sentence is pangilarm
//The quick brown fox jumps over the lazy dog

// let sen="thequickbrownfoxjumpsoverthelazydog"
// let set=new Set()
// for (let i = 0; i < sen.length; i++) {
//    let ch=sen.charAt(i);
//    set.add(ch)
    
// }
// console.log(set);
// console.log(set.size);


// if (set.size===26) {
//     console.log(true);
    
    
// }

// frequncy found of element
// let arr=[12,3,2,1,2,3,2,1,2,4,5,6,7,6,5]
// let map=new Map()
// for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//        map.set(arr[i],map.get(arr[i])+1)
//     }else map.set(arr[i],1)
    
// }
// console.log(map);

//sort thr people
// let height=[123,167,189]
// let people=["sohail","ali","rohail"]

// let map=new Map()
// for (let i = 0; i < height.length; i++) {
//   map.set(height[i],people[i])
    
// }
// height.sort((a,b)=>b-a)
// for (let i = 0; i < people.length; i++) {
//     people[i]=map.get(height[i])
    
// }


// console.log(map);


//two sum
let arr=[11,4,8,19]
let target=12
let map=new Map()
for (let i = 0; i < arr.length; i++) {
    if (map.has(target-arr[i])) {
         console.log([i,map.get(target-arr[i])])
         
       
    }else map.set(arr[i],i)
    
}







