const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3009;

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/fsd63', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
const yourDataSchema = new mongoose.Schema({});

const YourDataModel = mongoose.model('YourData', yourDataSchema);
app.post('/getdata', (req, res) => {
    const newData = new YourDataModel(req.body);
    newData.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data to database');
        } else {
            res.send('Data saved to database');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});