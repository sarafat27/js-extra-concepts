const products = [
    { name: 'iphone 14', price: 70000 },
    { name: 'samsung galaxy s4', price: 65000 },
    { name: 'hp laptop', price: 50000 },
    { name: 'dell laptop', price: 45000 },
    { name: 'lenovo laptop', price: 35000 },
    { name: 'mi smart watch', price: 2000 },
    { name: 'apple watch', price: 23000 },
];

function searchProducts(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }
    }
    return result;
}
const matched = searchProducts(products, 'laptop');
console.log(matched);