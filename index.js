const products = [
    {
        name: 'Product 1',
        price: 10.99,
        inStock: true
    },
    {
        name: 'Product 2',
        price: 10.99,
        inStock: false
    },
    {
        name: 'Product 3',
        price: 10.99,
        inStock: false
    },
    {
        name: 'Product 4',
        price: 10.99,
        inStock: false
    },
    {
        name: 'Product 5',
        price: 10.99,
        inStock: false
    },
    {
        name: 'Product 6',
        price: 10.99,
        inStock: false
    },
    {
        name: 'Product 7',
        price: 10.99,
        inStock: true
    },
    {
        name: 'Product 8',
        price: 10.99,
        inStock: true
    },
    {
        name: 'Product 9',
        price: 10.99,
        inStock: true
    },
    {
        name: 'Product 10',
        price: 10.99,
        inStock: true
    },

]

const inStockProducts = products.filter(product => product.inStock);
console.log('In Stock Products:', inStockProducts);

const inStockProductNames = inStockProducts.map(product => product.name.toUpperCase());
console.log('In Stock Product Names:', inStockProductNames);

products.push({
    name: 'Product 11',
    price: 10.99,
    inStock: true
});
console.log('Array After Push:', products);

products.pop();
products.pop();
console.log('Array After Pop:', products);

const slicedProducts = products.slice(2, 5);
console.log('Sliced Products:', slicedProducts);

const splicedProducts = products.splice(2, 4);
console.log('Spliced Products:', splicedProducts);

console.log('Final Products Array:', products);