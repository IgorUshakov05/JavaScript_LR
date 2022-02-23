// let 
let a = "a"
console.log("A1:", a) // A1: a
let b = "b"
console.log("B1:",b) // B1: b
{
    a = "A"
    const b = "B"
    console.log("A2:", a) // A2: A
    console.log("B2:",b) // B2: B
}
console.log("A3:", a) // A3: A
console.log("B3:",b) // B3: b

// Const 

const LOG = 7070
// LOG = 8080
console.log(LOG) // Error

const array = [0,1,2,3]
array.unshift(4)
console.log(array);