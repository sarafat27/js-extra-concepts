const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'samsung galaxy j2', price: 5000 },
    { name: 'hp laptop', price: 50000 },
    { name: 'dell laptop', price: 45000 },
    { name: 'lenovo laptop', price: 35000 },
    { name: 'mi smart watch', price: 2000 },
    { name: 'apple watch', price: 23000 },
];
/* for (const product of products) {
    if (product.price < 30000) {
        break;
    }
    console.log(product);
} */

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}
