const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const inputRoutes = require('./routes/inputRoutes');
const partsRoutes = require('./routes/partsRoutes');
const app = express();

mongoose.connect('mongodb://localhost:27017/pcpartwatcher', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());

app.use(bodyParser.json());

//Routes
app.use('/input', inputRoutes);
app.use('/parts', partsRoutes);

app.listen(5000, ()=> console.log('Server started on port 5000'));