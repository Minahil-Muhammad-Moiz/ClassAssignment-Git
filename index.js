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