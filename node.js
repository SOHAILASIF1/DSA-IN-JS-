// //node js architecture
// import fs from "fs"
// fs.readFile("test.txt","utf-8",(err,data)=>{
//     console.log(data);
    
// })
let arr = [1,1,2,3,3,3]

let freq = new Map()

for(let num of arr){
    freq.set(num, (freq.get(num) || 0) + 1)
}

console.log(freq);