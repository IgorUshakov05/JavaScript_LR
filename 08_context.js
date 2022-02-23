const person = {
    surename: "Старк",
    knows: function(whats,name) {
        console.log(`Ты ${whats} знаешь, ${name} ${this.surename}`);
    } 
}

const john = {surename: "Cноу"}
// person.knows("все","Бран") //Ты все знаешь, Бран Старк
// person.knows.call(john,"не все","Джон") //Ты не все знаешь, Джон Cноу
// person.knows.apply(john,["не все","Джон"]) //Ты не все знаешь, Джон Cноу
// person.knows.call(john,...["не все","Джон"]) //Ты не все знаешь, Джон Cноу
// person.knows.bind(john,"не все","Джон") //Ты не все знаешь, Джон Cноу
// const per = person.knows.bind(john) 
// per("не все","Джон") //Ты не все знаешь, Джон Cноу

// ================================================================================

function peron(name, age) {
    this.name = name
    this.age = age
    console.log(this)
};
// const igor = new peron("Игорь",16) //peron { name: 'Игорь', age: 16 }

// =====================
function logThis() {
    console.log(this);
}

const obj = {num: 12}

// logThis.apply(obj) //{ num: 12 }

// Arrow func

function Cat(color,name) {
    this.color = color
    this.name = name
    console.log(`This:`,this)
    ;(() => console.log(`Arrow this`, this))()
}

new Cat("red","Tom")