// let a = 42
// let b = a
// b++
// console.log(a, ":", b) //a = 42 b = 43

// let x = [1,2,3]
// let y = x
// y.push(4)
// console.log(`x = ${x} \ny = ${y}`) //x = 1,2,3,4: y = 1,2,3,4
let x = [1,2,3]
let y = x.concat()
y.push(4)
console.log(`x = <b>${x}</b> \ny = ${y}`) //x = 1,2,3 y = 1,2,3,4 
