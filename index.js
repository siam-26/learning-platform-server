const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const coursesInfo = require('./data/coursesInfo.json');

app.use(cors());

app.get('/course-info', (req, res) => {
    const id = parseInt(req.id);
    res.send(coursesInfo);
})

app.get('/course-info/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = coursesInfo.find(course => course.id === id);
    res.send(selectedCourse);
})
app.get('/checkout/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const checkOut = coursesInfo.find(course => course.id === id);
    res.send(checkOut);
})

app.get('/', (req, res) => {
    res.send('coders-info-bd is running on server')
})


app.listen(port, () => {
    console.log(`coders-info-bd listening on port ${port}`)
})