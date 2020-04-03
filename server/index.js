import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import inputRoutes from './routes/inputRoutes';

const app = express();

const PORT = 5000;

//Connect to the database
mongoose.Promise = global.Promise;
//Probably want to move this to a .env if/when production comes
mongoose.connect(`mongodb://localhost:27017/pcpartwatcher`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Use a js file for endpoints
inputRoutes(app);

//Very basic get request endpoint
app.get('/', (req, res) => {
    res.send(`Default endpoint as an example on port ${PORT}`);
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}!`));
