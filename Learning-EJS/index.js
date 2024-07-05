const express = require('express');
const app = express();

app.set('view engine', "ejs");

app.get('/', (req,res) => {
    res.render("blog", {
        name: "Romiya Dangol",
        description: "A mern stack developer",
        age: 19

    });
})


app.listen(8000, () => {
    console.log('Server running in port 8000')
})