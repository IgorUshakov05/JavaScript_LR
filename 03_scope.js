function FuncA() {
    let a = 1

    function FuncB() {
        b = 2

        function FuncC() {
            let c = 3
            console.log('C:',a, b, c);
        }
        FuncC()
        console.log("B:", a,b);
    }
    FuncB()
    console.log("A:",a);
}

FuncA()