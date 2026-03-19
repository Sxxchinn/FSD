const express = require('express');
const app = express();
const port = 8000;

// Home Page
app.get('/', (req, res) => {
    res.send("This is my first server");
});

// About Page
app.get('/about', (req, res) => {
    res.send("<h1>This is about page</h1>");
});

app.get('/about', (req, res) => {
    res.send('`<img src="https://wallpaperaccess.com/full/374467.jpg" alt="Google Logo">'`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});