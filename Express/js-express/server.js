const express = require('express')
const app = express()
const port = 8000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const users = [
    { first: "Kyle", last: "Marymee" },
    { first: "Aleksey", last: "Kashubin" },
    { first: "Ben", last: "Gomez" },
    { first: "Austin", last: "Serb" },
    { first: "Kurt", last: "Clausen" }
]


app.get("/api", (req, res) => {
    res.json({ message: "Hello world" })
});


app.get("/api/users", (req, res) => {
    res.json(users)
});


app.get("/api/users/:id", (req, res) => {
    res.json(users[req.params.id])
});


app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});


app.listen(port, () => console.log(`>>SERVER ONLINE`))