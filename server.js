const express = require('express');
const app = express();
app.use(express.json());

app.listen(PORT, (err) => {
    (err ? console.log(err) : '');
})