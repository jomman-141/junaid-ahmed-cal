# junaid-ahmed-cal
you can find here all calculator functions

## Features
- Addition
- Subtraction
- Multiplication
- Division (with divide-by-zero protection)

## Usage

```javascript
const calculator = require('./calculator');

// Addition
calculator.add(5, 3);        // Returns 8

// Subtraction
calculator.subtract(10, 3);  // Returns 7

// Multiplication
calculator.multiply(4, 5);   // Returns 20

// Division
calculator.divide(20, 4);    // Returns 5
calculator.divide(10, 0);    // Throws Error: 'Cannot divide by zero'
```

## Running Tests

```bash
npm test
```

## Example

Run the example file to see the calculator in action:

```bash
node example.js
```
