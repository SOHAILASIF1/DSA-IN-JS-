// // //1. Numbers array se: even filter karo, square karo, sum nikalo (chain karo)
// // // const numbr=[1,2,5,6,7,8,9]
// // // let res=numbr.filter(n=>n%2===0).map(n=>n**2).reduce((acc,curr)=>acc+curr,0)
// // // console.log(res);

// // // 2. Names array ko uppercase karo aur sort karo
// // // let names=["ali","noor","sohail","rohail"]
// // // let res=names.map(n=>n.toUpperCase()).sort()
// // // console.log(res);

// // // 3. splice se array ke beech mein element insert karo
// // // let arr=[1,3,5,7,9]
// // // let mid=Math.floor(arr.length/2)
// // // arr.splice(mid,0,99)
// // // console.log(arr);

// // // 4. reduce se word frequency count karo: ["a","b","a","c","b","a"]
// // // 5. Nested array [[1,2],[3,4],[5,6]] ko flat karo aur sum nikalo

// // // const nums=[1,2,3,4,5]
// // // const arr=nums.map(n=>n*2)
// // // console.log(arr);


// // // const users = [
// // //   { name: "Ali", active: true },
// // //   { name: "Sara", active: false },
// // //   { name: "Ahmed", active: true }
// // // ];

// // // console.log(users.filter(n=>n.active===true).map(n=>n.name));

// // // const user = {
// // //   name: "Ali",
// // //   greet: function() {
// // //     setTimeout(()=> {
// // //       console.log(this.name);
// // //     }, 1000);
// // //   }
// // // };

// // // user.greet();

// // // let arr=[10,20,-10,-13,7,-10]
// // // let sum=0
// // // let k=-10
// // // let count=0
// // // let map=new Map()
// // // map.set(sum,1)
// // // for (let i = 0; i < arr.length; i++) {
// // //   sum+=arr[i]
// // //   if (map.has(sum-k)) {
// // //     count+=map.get(sum-k)

// // //   }
// // //   map.set(sum,(map.get(sum)||0)+1)


// // // }
// // // console.log(count);

// // let arr = [10,11,4,5,2,1,-8,-10]
// // let sum = 0
// // let k = 15
// // let longest = 0

// // let map = new Map()
// // map.set(0, -1)

// // for (let i = 0; i < arr.length; i++) {
// //   sum += arr[i]

// //   if (map.has(sum - k)) {
// //     let len = i - map.get(sum - k)
// //     longest = Math.max(longest, len)
// //   }

// //   // sirf first time store karo
// //   if (!map.has(sum)) {
// //     map.set(sum, i)
// //   }
// // }

// // console.log(longest)



// // let obj = {
// //   name: "Alyan"
// // };

// // console.log(obj.__proto__ === Object.prototype); // true

// // function outer() {
// //   let count =0
// //   return function inner() {
// //     count++
// //     console.log(count);


// //   }
// //   inner()

// // }
// // const fn=outer()
// // fn()
// // fn()


// //longest consecutive sequence
// //brute force
// let arr=[1,4,7,2,3,14,13,7,8,10,9,11]
// //[1,2,3,4,7,8,9,10,11,13,14]
// // let count =0
// // let longest=0

// // arr.sort((a,b)=>a-b)
// // for (let i = 1; i < arr.length; i++) {
// //  if (arr[i]==arr[i-1]) continue
// //  else if(arr[i]==arr[i-1]+1) count++
// //  else{

// //   if (count>longest) {
// //     longest=count

// //   }
// //   count=1
// //  }

// // }
// // console.log(longest);

// //with set
// let set=new Set()
// for (let i = 0; i < arr.length; i++) {
//   set.add(arr[i])

// }
// let longest=0
// for(let a of set){
//   if (!set.has(a-1)) { //for
//     let count=1
//     let curr=a


//     while(set.has(curr+1)){
//     count++
//     curr++
//   }
//   if (count>longest) {
//     longest=count

//   }

//   }


// }


// console.log(longest);



// console.log("start");
// setTimeout(() => {
//   console.log("a");

// }, 0)
// Promise.resolve().then(()=>{
//   console.log("promise");
  
// })
// console.log("bye "); 





//higher order function  
// function a(b) {
//   console.log("hi");
//   b(sayPakisan())
  
  
// }
// function sayHi() {
//   console.log("hiiiiiiii");
  
  
// }
// function sayPakisan() {
//   console.log("Pakistan");
  
  
// }

// a(sayHi)




/// lets read  some about this keyword

// console.log(this);
// expected output is window

// function hi() {
//   console.log(this);
  
  
// }
// hi()
// expected is window



// const user={
//   name:"ali",
//   fullname:"hi",
//   printN: function(){
//     console.log(this.name);
    

    
//   }
// }
// user.printN()

//expected "ali"

// const user1={
//   name:"ali",
//   fullname:"hi",
//   printN: function(){

//     function ali() {
//       console.log(this);
      
      
//     }
//     ali()
    

    
//   }

// }
// user1.printN()


//expected window






"use strict";
function test() {
  console.log(this);
}
test();