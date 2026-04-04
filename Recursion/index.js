// function print(n){
//     if (n===0) return
//     console.log("Hi",n);
//     print(n-1)
    
// }
// print(7)


//print number n to 1
function printNum(n){
    if (n===0) return
    console.log(n);
    printNum(--n)    


}
printNum(10000)