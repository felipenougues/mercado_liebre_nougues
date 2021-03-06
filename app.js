const express = require('express');
const app = express();

const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));

const PORT = process.env.PORT || 3030;

const archHome = path.join(__dirname, '/views/home.html')
const archRegister = path.join(__dirname, '/register.html')
const archLogin = path.join(__dirname, '/login.html')


app.get('/', function(req, res) {
    res.sendFile(archHome)
})
app.get('/register', function(req, res) {
    res.sendFile(archRegister)
})
app.get('/login', function(req, res) {
    res.sendFile(archLogin)
})

/*
app.get('/views/login', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get('/views/register', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

*/

app.listen(PORT, () => {
    console.log("Servidor Corriendo")
});