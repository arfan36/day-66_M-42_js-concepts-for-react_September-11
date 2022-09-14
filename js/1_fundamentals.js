//* ─── 1. How To Declare Variable Using Let And Const ─────────────────────────────
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

//* ─── 2. Conditions ──────────────────────────────────────────────────────────────
// 6 basic conditions >, <, ===, !==, <=, >=
// multiple conditions: &&, ||
if (fatherName === 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

//* ─── 3. Array Declare ───────────────────────────────────────────────────────────
// index
// length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

//* ─── 4. For Loop ────────────────────────────────────────────────────────────────
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
}

//* ─── 5. Function ────────────────────────────────────────────────────────────────
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);

//* ─── 6. Object ──────────────────────────────────────────────────────────────────
// 3 ways to access property by name
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

const myVariable = 'age';

// console.log(student.age);   //# direct access by property 
// console.log(student['age']);    //# access via property name string
// console.log(student[myVariable]);   //# access via property name in a variable