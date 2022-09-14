// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// ─── Check Truthy ───────────────────────────────────────────────────────────────
let myVar = 5;
// Check Any Truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// ─── Check Negative Or Falsy Or Anything ────────────────────────────────────────
if (!myMoney) {

}

const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ─── Ternary Operator ──────────────────────────────────────────────────────────
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// ─── Number To String ───────────────────────────────────────────────────────────
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// ─── String To Number ───────────────────────────────────────────────────────────
const input = '560';
const inputNum = +input;
// console.log(inputNum);

let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// ─── Ternary Operator Shortcut ──────────────────────────────────────────────────
// isActive ? showUser() :  hideUser();
isActive && showUser(); // use && if the left side is true then right side will be executed
isActive || hideUser(); // use || if the left side is false then right side will be executed

// ─── Toggle Boolean ─────────────────────────────────────────────────────────────
isActive = !isActive;