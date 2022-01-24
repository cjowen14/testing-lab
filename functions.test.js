const{
    returnTwo,
    greeting,
    add
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

test('add should return a sum of 3', () => {
    let sum = add(1, 2);
    expect(sum).toBe(3);
})

test('add should return a sum of 14', () => {
    let sum = add(5, 9);
    expect(sum).toBe(14);
})