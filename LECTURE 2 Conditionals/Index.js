// // Valid Voter
// let age = 18
// let havaCNIC=true
// if (age>=18 && havaCNIC) {
//     console.log("Allow For Voting");
    
    
// }else {
//     console.log("Not Allow for Voting");
    
// }

// shop Discount 
let shoping=10000
if (shoping>0&&shoping<=5000) {
    let Discount=0
    let res=(Discount/100)*shoping
   let final =shoping-res
   console.log(final);
   
    
    
}else if (shoping>5000 && shoping<=7000) {
       let Discount=5
    let res=(Discount/100)*shoping
   let final =shoping-res
   console.log(final);
    
} else if(shoping>7000&&shoping<=10000){
       let Discount=20
    let res=(Discount/100)*shoping
   let final =shoping-res
   console.log(final);

}