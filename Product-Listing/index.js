const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const products =[
            { "name": "Laptop", "price": 1200, "inStock": true },
            { "name": "Smartphone", "price": 800, "inStock": false },
            { "name": "Tablet", "price": 500, "inStock": true },
            { "name": "Headphones", "price": 150, "inStock": true }
        ]
    res.render('layout', { products });
    });

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})