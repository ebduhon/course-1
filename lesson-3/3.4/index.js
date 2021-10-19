
// Object Literals

const mystery = 'answer';

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42
}

console.log(obj.mystery); //undefined
console.log(obj.answer); //42