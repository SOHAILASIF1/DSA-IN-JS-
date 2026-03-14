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


// factor of a numbers
let pr = prompt("Enter A Number")
// console.log(pr);
if (pr === null) {
    console.log("Canselled");


}

let num = Number(pr)


if (isNaN(num)) {
    console.log("Invalid Choice PLease Select a number");


} else {
    if (num > 0) {
        let factor = []
        for (let index = 1; index <= num; index++) {
            if (num % index === 0) {
                factor.push(index)

            }


        }
        console.log(factor);

    } else {
        console.log("Should be +ve number and greater then zero");

    }

}




