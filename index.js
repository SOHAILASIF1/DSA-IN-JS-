//practice   all question



//reverse a number 

// let n=1456
// let rev=0
// while(n>0){
//     let  rem=n%10
//     rev=(rev*10)+rem
//     n=Math.floor(n/10)
// }
// console.log(rev);

// //strong Number
// let n=145
// let sum=0
// let fact=1
 
// while(n>0){
//     let rem=n%10
    
//     for (let i = 1; i <= rem; i++) {
//        fact=fact*i
        
//     }
//     sum+=fact
//      fact=1
//     n=Math.floor(n/10)
// }
// console.log(sum);

// //all left on zero
// let arr=[0,0,1,1,0,0,0,1,1,0,1,0,0,0]
// let i=0,j=0
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]===0) {
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp

//     j++
    
//   }
  
    
// }
// console.log(arr);


// //reverse a array 
// let arr=[1,6,9,0,8,7]
// let i=0,j=arr.length-1
// while(i<j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }

// console.log(arr);

////sec max element

// let arr=[1,2,3,2,1,4,5,6,7,9,12,12,34,5,6,7,6,44,33]
// let max=0
// let secmax=0
// if (arr[0]>arr[1]) {
//     max=arr[0]
//     secmax=arr[1]
    
// }else{
//     max=arr[1]
//     secmax=arr[0]
// }

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i]>max) {

//       max=arr[i]
//   }else{
//     secmax=arr[i]
//   }
// }
// console.log(secmax);

//max element

// //max elent
// let arr=[2,1,2,3,4,5,6,6,6,33,22,3,4,2,2,332,2323,42]
// let max=arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]>max) {
//    max=arr[i]
//     }
    
// }
// console.log(max);

// //third max element
// let arr=[12,13,43,45,42,34]
// let max=0
// let secmax=0
// let thirdmax=0
// if (arr[0]>arr[1] && arr[0]>arr[2] &&arr[1]>arr[2]) {
//     max=arr[0]
//     secmax=arr[1]
//     thirdmax=arr[2]

    
// }else if(arr[1]>arr[0]&&arr[1]>arr[2]&&arr[0]>arr[2]){
//     max=arr[1]
//     secmax=arr[0]
//     thirdmax=arr[2]
// }else{
    
// }

// var isPalindrome = function(x) {
//     let rev=0
//     let isPalindromeVal=false
//     let copy=x
//     while(x>0){
//         let rem=x%10
//         rev=rev*10+rem
//         x=Math.floor(x/10)
//     }
//     if(copy===rev){
//         return isPalindromeVal=true 
//     }else{
//        return isPalindromeVal=false
//     }

    
// };
// console.log(isPalindrome(-121));

// var gcdOfOddEvenSums = function(n) {
//     let sumOdd=0
//     let sumEven=0
//     for(let i=1;i<n*2;i++){
//         if(i%2===0) sumEven+=i
//         else sumOdd+=i
//     }
//     while (sumOdd!=sumEven){
//         if(sumOdd>sumEven) sumOdd=sumOdd-sumEven
//         else sumEven=sumEven-sumOdd

    

//     }

//     return sumEven


    
// };
// console.log(gcdOfOddEvenSums(5));

//recursive way 

// function gcd(a,b) {
//     if (a==b) return a
//     if (a>b) return gcd(a-b,b)
//     return gcd(a,b-a)
    
// }
// console.log(gcd(96,24));



