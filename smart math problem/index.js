//gcd find

// let a=80 ,b=16
// while(a!=b){
//     if (a>b) a=a-b
//     else b=b-a
    

// }
// console.log(a);

//prime number count
let n=40
let arr=new Array(n+1).fill(true)
for (let i=2;i<=Math.floor(Math.sqrt(n));i++) {
    if (arr[i]) {
        for (let j = i*i; j <=n; j+=i) {
           arr[j]=false
            
        }
        
    }
    
}
let count=0
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        console.log(i);
        count++
        
        
    }
  
    
}
console.log(count);


