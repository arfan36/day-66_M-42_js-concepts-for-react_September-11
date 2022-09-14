// 1. JSON => stringify, parse ____________________________________________________

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);


// ─── 2. Fetch ───────────────────────────────────────────────────────────────────
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// object: keys, values __________________________________________________________
const keys = Object.keys(student);
const values = Object.values(student);

// ─── For Each ──────────────────────────────────────────────────────────────────
const numbers = [23, 54, 67, 87, 23, 78];
// numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// ─── For Of On Array Like Object ────────────────────────────────────────────────
// ─── Loop On An Object Using For In ─────────────────────────────────────────────

// ─── Add Or Remove From An Array ────────────────────────────────────────────────
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// ─── Copy Products Array And Then Add Newproduct ────────────────────────────────
const newProducts = [...products, newProduct];

// ─── Create A New Array Without One Specific Item ───────────────────────────────
// ─── Remove Phone Means Create A New Array Without The Phone ────────────────────
const remaining = products.filter(product => product.name !=='phone')
console.log(remaining);