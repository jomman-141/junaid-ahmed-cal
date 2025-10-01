const calculator = require('./calculator');

// Example usage of the calculator functions
console.log('Calculator Examples:');
console.log('===================');

console.log('\nAddition:');
console.log('5 + 3 =', calculator.add(5, 3));
console.log('10 + (-4) =', calculator.add(10, -4));

console.log('\nSubtraction:');
console.log('10 - 3 =', calculator.subtract(10, 3));
console.log('5 - 8 =', calculator.subtract(5, 8));

console.log('\nMultiplication:');
console.log('4 * 5 =', calculator.multiply(4, 5));
console.log('7 * (-2) =', calculator.multiply(7, -2));

console.log('\nDivision:');
console.log('20 / 4 =', calculator.divide(20, 4));
console.log('15 / 2 =', calculator.divide(15, 2));

console.log('\nDivision by zero (will throw error):');
try {
  console.log('10 / 0 =', calculator.divide(10, 0));
} catch (error) {
  console.log('Error:', error.message);
}
