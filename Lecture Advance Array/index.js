// //left rataion by 1

// let arr=[1,2,3,4,5]
// let copy=arr[0]
// for (let index = 0; index < arr.length-1; index++) {
//     arr[index]=arr[index+1]


// }
// arr[arr.length-1]=copy
// console.log(arr);

//bruteforce approch
// let arr=[1,2,3,4]
// let copy=arr[arr.length-1]
// for (let i = arr.length-1; i >0; i--) {
//   arr[i]=arr[i-1]

// }
// arr[0]=copy

// console.log(arr);

// optimized approch
// let arr=[1,2,3,4,5]
// let k=2
// //temp[i]=arr[(i+k)%arr.lenght]
// //for first iteration
// let temp=[]
// // let copy=arr[0]
// for (let i = 0; i < arr.length; i++) {
// temp[i]=arr[(i+k)%arr.length]
  
// }
// // arr[arr.length-1]=copy
// console.log(temp);

// // right rotaion by k time
// let arr=[1,2,3,4,5]
// let temp=[]
// let k=2
// for (let i = 0; i < arr.length; i++) {
//     temp[(i+k)%arr.length]=arr[i]
    
// }
// console.log(temp);



//the most efficent algotthim to solve this

// let arr=[1,2,3,4,5]
// let k=2
// rverse(0,k-1)
// rverse(k,arr.length-1)
// rverse(0,arr.length-1)
// console.log(arr);



// function rverse(i,j){
//     while(i<j){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
//         j--
//     }

// }


// //duplicate in sorted array

// let arr=[0,0,1,1,1,2,3,3,4,5,6]
// let j=1

// for (let i = 0; i < arr.length-1; i++) {
   
//     if (arr[i]!=arr[i+1]) {
//         arr[j]=arr[i+1]
//         j++
//     }
   
// }
// console.log(arr);




//merge sorted Array
//with extra space
// let arr1=[1,2,5,7,9]
// let arr2=[3,4,8,10]
// let i=j=k=0
// let temp=new Array(arr1.length + arr2.length)
// while(i<arr1.length && j<arr2.length){
//     if (arr1[i]<arr2[j]) {
//         temp[k]=arr1[i]
//         k++
//         i++
        
//     }else{
//         temp[k]=arr2[j]
//         j++
//         k++
//     }

// }
// while(i<arr1.length){
//     temp[k++]=arr1[i++]
// }
// while (j<arr2.length){
//     temp[k++]=arr2[j++]
// }
// console.log(temp);




//Best Time To Buy And Sell Stock

// let arr=[2,3,4,8,9,3]
// let maxProfit=0
// let min=arr[0]
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i]<min) {
//     min=arr[i]
    
//    }
//   let diff= arr[i]-min
// //   console.log(diff);
//   if (diff>maxProfit) {
//     maxProfit=diff
    
//   }
  

    
    
// }
// // console.log(min);
// console.log(maxProfit);

// //sort the color
// //0=red,1=blue 2=yellow
// //dutch national algorithim

// let arr=[0,1,1,2,1,1,2,0]
// let i=0 ,j=0,k=arr.length-1
// while(i<k){
//     if (arr[i]===0) {
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//         i++
        
//     }else if(arr[i]===2){
//         let temp=arr[i]
//         arr[i]=arr[k]
//         arr[k]=temp
//         k--
        
//     }else{
//         i++
//     }
        

// }
// console.log(arr);


//find subarray with largest sum t
let arr=[-2,1,0,-1,2,3,4,-1,5,2,1,1]
let sum=0
let max=-Infinity
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i]
    if (sum<0) {
        sum=0
        
    }
    if (sum>max) {
        max=sum
        
    }

    
}
console.log(max);
console.log(sum);





