// //print every character on new line
// let str="sohail"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
    
    
// }


// //print every character in reversed Order
// let str="sohail"
// for (let i = str.length-1; i >= 0; i--){
//  console.log(str[i]);
  
// }


// //print in reverse order
// let str="sohail"
// let revStr=""
// for (let i = str.length-1; i >=0 ; i--) {
//     revStr+=str[i]
    
// }
// console.log(revStr);


// // check if given string is pandoliram
// let str="madam"
// let isPalandrome=true

// let i=0,j=str.length-1
// while (i<j) {
//     if (str[i]!=str[j]) {
//         isPalandrome=false
//         break
       
       
        
//     }
//      i++
//     j--
        
    
    
// }
// console.log(isPalandrome);


// //toggle character 

// let str="sohail"
// let toggle=''
// for (let i = 0; i < str.length; i++) {
//  let charcodeis=str.charCodeAt(i);
// if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
//      toggle+=String.fromCharCode(charcodeis+1)
   
// }
//  toggle+=String.fromCharCode(charcodeis+1)
   
    
// }
// console.log(toggle);




//frequency check in string

let str="hello"
let arr=new Array(128).fill(0)
for (let i = 0; i < arr.length; i++) {
    let sh=str.charCodeAt(i)
    arr[sh]=arr[sh]+1
     
}
for (let i = 0; i < arr.length; i++) {
     if (arr[i]>0) {
          console.log(String.fromCharCode(i)+" appear at " + arr[i]+" times");
          
          
     }
     
}




