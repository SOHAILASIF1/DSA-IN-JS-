// //n time hello world
// let n=10000
// for (let i = 0; i < 10001; i++) {
//    console.log(`Hello world ${i}`);


// }
// //n time hello world vice verca
// let n=100
// for (let i = 100; i >0; i--) {
//     console.log(`hello world ${i}`);


// }


// // sum of natural number
// let n=10
// let sum=0
// for (let i = 1; i < n; i++) {
//     sum+=i
// }
// console.log(sum);


// //factorial of n number

// let n=5
// let factorial=1
// for (let i = n; i >0; i--) {
//    factorial=factorial*i

// }
// console.log(factorial);


// // factor of a numbers
// let pr = prompt("Enter A Number")
// // console.log(pr);
// if (pr === null) {
//     console.log("Canselled");


// }

// let num = Number(pr)


// if (isNaN(num)) {
//     console.log("Invalid Choice PLease Select a number");


// } else {
//     if (num > 0) {
//         let factor = []
//         for (let index = 1; index <= num; index++) {
//             if (num % index === 0) {
//                 factor.push(index)

//             }


//         }
//         console.log(factor);

//     } else {
//         console.log("Should be +ve number and greater then zero");

//     }

// }

// //prime number

// let num=7
// let prime=true
// for (let index = 2; index < Math.floor(num/2); index++) {
//     if (num%index===0) {
//         prime=false
//         break;
        
//     }
    
// }
// console.log(prime);

// // sum of digit
// let n=23465
//  let sum=0
//  while(n>0){
//     let rem=n%10
//     sum+=rem
//     n=Math.floor(n/10)

//  }
//  console.log(sum);

// //reverse a number
// let n=23456
// let rev=0   //the equation of reverse is rev=rev*10+rem 
// while(n>0){
//     let rem=n%10
//     rev=rev*10+rem
//     n=Math.floor(n/10)
// }
// console.log(rev);

 // //strong number
// let num=145
// let sum=0
// let fact =1
// while(num>0){
//     let rem=num%10
//     for (let i = rem; i > 0; i--) {
//         fact=fact*i
        
//     }

//     sum+=fact
//     fact=1
//     num=Math.floor(num/10)
// }
// console.log(sum);



// if (sum===num) {
//     console.log("This is strong Number");
    
    
// }else{
//     console.log("sum of Factorial of all digits is not equal to orignal number");
    
// }


// //repeat hello
// let pr

// do {
//     pr = prompt("Enter 0 to exit")
//     if (pr === "0") break

//     console.log("hello")

// } while (true)


// //guess number
// let random=Math.floor(Math.random()*100)+1
// let guess=0
// while(guess!==random){
//     guess=Number(prompt("hi guess it"))
//     if (isNaN(guess)) {
//         console.log("Invalid Number");

        
        
//     }

//     if (guess>random) {
//         console.log("too high");
        
        
//     }else if (guess<random) {
//         console.log('too low');
        
        
//     }else{
//         console.log("you nailed it");
        
//     }
// }


// //PATTERN PROGRAMMING


// let n=10
// for (let i = 1; i <=n; i++) {
//   for (let j = 1; j <=i; j++) {
//    console.log("*");
   
    
//   }
    
//}


// let array=[10,20,40,50,60]
//  let sum=0
//  for (let index = 0; index < array.length; index++) {
//      sum += array[index];
    
//  }
// console.log(sum);
 //max element

//  let array=[10,3780,80,90]
//  let max=array[0]
//  for (let index = 0; index < array.length; index++) {
//     if (array[index]>max) {
//          max = array[index];
//     }
    
//  }
//  console.log(max);

// //min elem
// let array=[43,98,76,67]
// let min=array[0]
// for (let index = 0; index < array.length; index++) {
//     if (array[index]<min) {

//       min=array[index]
//     }
    
// }
//  console.log(min);

//second max 
let array=[1,2,3,4,5,29,8,17,8,91]
let max;
let secMax;
if (array[0]>array[1]) {
    max=array[0]
    secMax=array[1]
    
}else{
    secMax=array[0]
    max=array[1]
}
 
for (let i = 2; i < array.length; i++) {
   if (array[i]>max ) {
    secMax=max
     max=array[i]
   }
  
  
    
}
console.log(secMax);















