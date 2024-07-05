const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render("profile", {
    name: "John Doe",
    age: 25,
    isAdmin: true,
    hobbies: ['Reading', 'Traveling', 'Cooking'],
    payload:{}
    });
});

app.post('/profile', (req, res) => {
    const payload = req.body;
    const updateData = {
        name: payload.name,
        age: payload.age,
        isAdmin: payload.isAdmin === 'on',
        hobbies: payload.hobbies ? payload.hobbies.split(',').map(hobby => hobby.trim()) : [],
    };
    res.render("profile", {
        ...updateData,
        payload: payload,
    });
});


app.listen(8000, () => {
    console.log("Server is running on PORT 8000");
});
