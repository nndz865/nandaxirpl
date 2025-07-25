
function calculate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Invalid operator';
    }
}


const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter an operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

const result = calculate(operator, num1, num2);
alert(`The result is: ${result}`);