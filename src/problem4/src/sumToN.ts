/**
 * Functions to calculate the summation of numbers from 1 to n
 */

/**
 * Iterative approach: Uses a loop to sum numbers from 1 to n.
 */
export function sumToN_iterative(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Mathematical formula approach: Uses n * (n + 1) / 2.
 */
export function sumToN_formula(n: number): number {
    return (n * (n + 1)) / 2;
}

/**
 * Recursive approach: Calls itself until n reaches 0.
 */
export function sumToN_recursive(n: number): number {
    if (n <= 0) return 0;
    return n + sumToN_recursive(n - 1);
}
