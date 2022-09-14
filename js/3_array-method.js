const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brand = products.map(product => product.brand);
// console.log(brand);
const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {

});


// ─── 3. Filter ──────────────────────────────────────────────────────────────────
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
/* 
[
 $ { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
 $ { name: 'sunglass', price: 300, brand: 'ray', color: 'black' }
]
 */

const specialName = products.filter(product => product.name.toLowerCase().includes('n'));
// console.log(specialName);
/* 
[
 $   { "name": "phone", "price": 7000, "brand": "iphone", "color": "golden" }, 
 $   { "name": "sunglass", "price": 300, "brand": "ray", "color": "black" }
]
*/

// ─── 4. Find ────────────────────────────────────────────────────────────────────
const special = products.find(product => product.name.toLowerCase().includes('n'));
// console.log(special);
//$ { "name": "phone", "price": 7000, "brand": "iphone", "color": "golden" }

