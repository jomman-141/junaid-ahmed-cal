const calculator = require('./calculator');

// Test helper
function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(`  ${error.message}`);
    process.exit(1);
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}

// Addition tests
test('add: 2 + 3 = 5', () => {
  assertEqual(calculator.add(2, 3), 5, 'Addition failed');
});

test('add: -1 + 1 = 0', () => {
  assertEqual(calculator.add(-1, 1), 0, 'Addition with negatives failed');
});

test('add: 0 + 0 = 0', () => {
  assertEqual(calculator.add(0, 0), 0, 'Addition with zeros failed');
});

// Subtraction tests
test('subtract: 5 - 3 = 2', () => {
  assertEqual(calculator.subtract(5, 3), 2, 'Subtraction failed');
});

test('subtract: 3 - 5 = -2', () => {
  assertEqual(calculator.subtract(3, 5), -2, 'Subtraction with negative result failed');
});

// Multiplication tests
test('multiply: 3 * 4 = 12', () => {
  assertEqual(calculator.multiply(3, 4), 12, 'Multiplication failed');
});

test('multiply: -2 * 3 = -6', () => {
  assertEqual(calculator.multiply(-2, 3), -6, 'Multiplication with negatives failed');
});

test('multiply: 5 * 0 = 0', () => {
  assertEqual(calculator.multiply(5, 0), 0, 'Multiplication by zero failed');
});

// Division tests
test('divide: 10 / 2 = 5', () => {
  assertEqual(calculator.divide(10, 2), 5, 'Division failed');
});

test('divide: 7 / 2 = 3.5', () => {
  assertEqual(calculator.divide(7, 2), 3.5, 'Division with decimal failed');
});

test('divide: -10 / 2 = -5', () => {
  assertEqual(calculator.divide(-10, 2), -5, 'Division with negatives failed');
});

test('divide: throws error for division by zero', () => {
  try {
    calculator.divide(10, 0);
    throw new Error('Should have thrown error for division by zero');
  } catch (error) {
    if (error.message !== 'Cannot divide by zero') {
      throw new Error(`Wrong error message: ${error.message}`);
    }
  }
});

console.log('\nAll tests passed!');
