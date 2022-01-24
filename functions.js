module.exports = {
    returnTwo: () => {
        return(2);
    },

    greeting: (name) => {
        return(`Hello, ${name}.`);
    },

    add: (num1, num2) => {
        if(typeof num1 === 'number' && typeof num2 === 'number'){
            return(num1 + num2);
        }else{
            return("Must enter two numbers");
        }
    },

    multiply: (num1, num2) => {
        if(typeof num1 === 'number' && typeof num2 === 'number'){
            return(num1 * num2);
        } else{
            return("Must enter two numbers");
        }
    },

    divide: (num1, num2) => {
        if(typeof num1 === 'number' && typeof num2 === 'number'){
            return(num1 / num2);
        } else{
            return("Must enter two numbers");
        }
    },

    subtract: (num1, num2) => {
        if(typeof num1 === 'number' && typeof num2 === 'number'){
            return(num1 - num2);
        } else{
            return("Must enter two numbers");
        }
    },
}

