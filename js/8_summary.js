/* 
// ─── Fundamentals ───────────────────────────────────────────────────────────────
1.1 variable (let, const) three types variable
1.2 condition (<, >, ===, !==, <=, >=) && ||, if -       else if      - else
1.3 array: declare, length, index, push, pop, indexOf, includes
1.4 for loop, while loop
1.5 function return parameter
1.6 object property, including array, object
// ────────────────────────────────────────────────────────────────────────────────

// ─── Es6 ────────────────────────────────────────────────────────────────────────
1. template string ${}
2. spread (...)
    2.1 copy an array then add a new element to a an array
    2.2 use filter to remove an element from an array 
3 Arrow function
    3.1 no parameter ()
    3.2 single parameter
    3.3 multiple parameter ()
    3.4 multi line
4. destructuring
    4.1 object destructuring
    4.2 array destructuring
5. object declaration shortHand
6. function parameter default value
7. Optional chaining (?.)
// ────────────────────────────────────────────────────────────────────────────────

// ─── Browser Api ────────────────────────────────────────────────────────────────
1. local storage and session storage
2. location API
3. History API
4. fetch
// ────────────────────────────────────────────────────────────────────────────────

// ─── Others ─────────────────────────────────────────────────────────────────────
1. array: map, forEach, filter, find
2. ternary operator
3. logical and logical or && ||
4. JSON (stringify, parse)
5. +, (string to number Shortcut, like +inputNumber)
// ────────────────────────────────────────────────────────────────────────────────
 */

const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
};
// ─── Shortcut ───────────────────────────────────────────────────────────────────
const obj1 = { x, y };

const name = 'Solimullah';
const area = 'Dhaka';
const nobab = {
    name: name,
    area: area
};
// ─── Shortcut ───────────────────────────────────────────────────────────────────
const nobab2 = { name, area };