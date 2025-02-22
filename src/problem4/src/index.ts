import { sumToN_iterative, sumToN_formula, sumToN_recursive } from "./sumToN";

const n = 10; // Change this number to test

console.log(`Iterative Sum of ${n}:`, sumToN_iterative(n));
console.log(`Formula Sum of ${n}:`, sumToN_formula(n));
console.log(`Recursive Sum of ${n}:`, sumToN_recursive(n));
