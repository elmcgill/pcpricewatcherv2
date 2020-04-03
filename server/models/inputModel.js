import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const InputSchema = new Schema({
    amazon : {
        type: Array,
    },
    newegg: {
        type: Array
    }
});
