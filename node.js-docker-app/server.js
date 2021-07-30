const express = require('express');

// constants
const PORT = 8080;

// App
const app = express();
// request, response
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT); // 여기서 App 실행.
console.log("Server is running!");