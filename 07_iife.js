//Immediate invoked Function Exprecion 
let result = []
for (var i = 0; i < 5; i++) {
    result.push(function() {
        console.log(i);
    })    
}

// result[0]() // 5
// result[1]() // 5
// result[2]() // 5
// result[3]() // 5
// result[4]() // 5

let result1 = []
for (let i = 0; i < 5; i++) {
    result1.push(function() {
        console.log(i);
    })    
}

// result1[0]() // 0
// result1[1]() // 1
// result1[2]() // 2
// result1[3]() // 3
// result1[4]() // 4

let result2 = []
for (var i = 0; i < 5; i++) {
    (function() {
        var j = i
        result2.push(function () {
            console.log(j)
        })
    })()
}
result2[2]() // 2
result2[3]() // 3
result2[4]() // 4