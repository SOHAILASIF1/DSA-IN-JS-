// function print(n){
//     if (n===0) return
//     console.log("Hi",n);
//     print(n-1)
    
// }
// print(7)


//print number n to 1
// function printNum(n){
//     if (n===0) return
//     console.log(n);
//     printNum(--n)    


// }
// printNum(10000)

// //print natural number 1 to n

// function printNum(n){
//     if(n==0)return
//     printNum(n-1)
//     console.log(n);
    

// }
// printNum(1000)


// // print sum 1 to n
function sumN(n){
    if(n===1) return 1
    
    return n+sumN(n-1)
    
    
}
console.log(sumN(5));

