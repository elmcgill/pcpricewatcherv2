import mongoose from 'mongoose';
import {InputSchema} from '../models/inputModel';

const Input = mongoose.model('Input', InputSchema);

/*We will export individual functions to carry out each
API call, this is an example of adding a new object to the
database from an API call
Mongoose query operators documentation:
https://mongoosejs.com/docs/queries.html
*/
export const addNewList = (req, res) => {
    let newList = new Input(req.body);
    console.log(newList);

    newList.save((err, list) => {
        if(err){
            res.send(err);
        }  
        res.json(list._id);
    });
}

export const getAllLists = (req, res) => {
    Input.find({}, (err, list) => {
        if(err){
            res.send(err);
        }
        res.json(list);
    });
};
