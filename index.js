const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('coders-info-bd is running on server')
})


app.listen(port, () => {
    console.log(`coders-info-bd listening on port ${port}`)
})