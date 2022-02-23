function sayHelloTo(name) {
    const message = `Hello ${name}`
    return function() {
        console.log(message);
    }
}

const igor = sayHelloTo("igor") // = sayHelloTo =("ior") => {function {console.log(message)}}
// igor() // Вызываем функцию из ретурна, но с параметром из кода выше
function createFW() {
    const fw = ["Angluar", "React", "Vue"]
    return {
        print: function() {
            console.log(fw);
        },
        add: function(frame) {
            fw.push(frame)
        }
    }
}

const funFW = createFW()
// funFW.print()//[ 'Angluar', 'React', 'Vue' ]
funFW.add("jQuery")
// funFW.print() //[ 'Angluar', 'React', 'Vue', 'jQuery' ]

// SetTimeout

const fib = [1,2,3,5,8,13]
for (let i = 0; i < fib.length; i++) {
    setTimeout(() => console.log(`fib[${i}] = ${fib[i]}`),1000)
}
