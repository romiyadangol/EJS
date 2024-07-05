const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render("profile", {
        name : "John Doe",
        age : 25,
        isAdmin : true,
        hobbies : ['Reading', 'Traveling', 'Cooking']
    })
})

app.listen(8000, () => {
    console.log("Server is running on PORT 8000");
})