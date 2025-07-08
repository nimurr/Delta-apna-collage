const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send(`Hello from worker ${process.pid}`);
});

app.listen(process.pid, () => {
    console.log(`Worker ${process.pid} running on port ${process.pid}`);
});
