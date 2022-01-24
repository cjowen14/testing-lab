const{
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')
const { TestWatcher } = require('jest')

// Test returnTwo Function
test('returnTwo should return the number 2', () => {
    let twoReturn = returnTwo();
    expect(twoReturn).toBe(2);
})

test('greeting should return Hello, James', () => {
    let helloJames = greeting('James');
    expect(helloJames).toBe('Hello, James.');
})

test('greeting should return Hello, Jill', () => {
    let helloJames = greeting('Jill');
    expect(helloJames).toBe('Hello, Jill.');
})

describe('Math functions', () => {
    test('add should return a sum of 3', () => {
        let sum = add(1, 2);
        expect(sum).toBe(3);
    })
    
    test('add should return a sum of 14', () => {
        let sum = add(5, 9);
        expect(sum).toBe(14);
    })
    
    test('multiply should return value of 20', () => {
        let mult = multiply(5,4);
        expect(mult).toBe(20);
    })
    
    test('multiply should return value of 100', () => {
        let mult = multiply(10,10);
        expect(mult).toBe(100);
    })
    
    test('divide should return value of 10', () => {
        let div = divide(200,20);
        expect(div).toBe(10);
    })
    
    test('divide should return value of 4', () => {
        let div = divide(8,2);
        expect(div).toBe(4);
    })
    
    test('subtract should return value of 184', () => {
        let sub = subtract(190,6);
        expect(sub).toBe(184);
    })
    
    test('subtract should return value of 1294', () => {
        let sub = subtract(5125,3831);
        expect(sub).toBe(1294);
    })

    test('add returns a number', () => {
        let newNum = add(4, 3);
        expect(typeof newNum).toBe('number');
    })
    
    test('subtract returns a number', () => {
        let newNum = subtract(4, 3);
        expect(typeof newNum).toBe('number');
    })
    
    test('multiply returns a number', () => {
        let newNum = multiply(4, 3);
        expect(typeof newNum).toBe('number');
    })
    
    test('divide returns a number', () => {
        let newNum = divide(4, 2);
        expect(typeof newNum).toBe('number');
    })
})


test('greeting returns a string', () => {
    let greetStr = greeting('Cory');
    expect(typeof greetStr).toBe('string');
})

// Testing number of parameters for functions

describe('Parameter Checker', () => {
test('greeting contains only 1 param', () => {
    let greetStr = greeting('cory', 'billy');
    expect(greeting.length).toBe(1);
})

test('add contains exactly 2 params', () => {
    let addParam = add(4, 2);
    expect(add.length).toBe(2);
})

test('subtract contains exactly 2 params', () => {
    let subtractParam = subtract(4, 2);
    expect(subtract.length).toBe(2);
})

test('multiply contains exactly 2 params', () => {
    let multiplyParam = multiply(4, 2);
    expect(multiply.length).toBe(2);
})

test('divide contains exactly 2 params', () => {
    let divideParam = divide(4, 2);
    expect(divide.length).toBe(2);
})

})