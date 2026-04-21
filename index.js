//1. Numbers array se: even filter karo, square karo, sum nikalo (chain karo)
// const numbr=[1,2,5,6,7,8,9]
// let res=numbr.filter(n=>n%2===0).map(n=>n**2).reduce((acc,curr)=>acc+curr,0)
// console.log(res);

// 2. Names array ko uppercase karo aur sort karo
// let names=["ali","noor","sohail","rohail"]
// let res=names.map(n=>n.toUpperCase()).sort()
// console.log(res);

// 3. splice se array ke beech mein element insert karo
let arr=[1,3,5,7,9]
let mid=Math.floor(arr.length/2)
arr.splice(mid,0,99)
console.log(arr);

// 4. reduce se word frequency count karo: ["a","b","a","c","b","a"]
// 5. Nested array [[1,2],[3,4],[5,6]] ko flat karo aur sum nikalo