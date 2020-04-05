const mongoose = require('mongoose');

const InputSchema = mongoose.Schema({
    cpu: {
        type: Array,
        required: false
    },
    mobo: {
        type: Array,
        required: false
    },
    gpu: {
        type: Array,
        required: false
    },
    ram: {
        type: Array,
        required: false
    },
    storage: {
        type: Array,
        required: false
    },
    psu : {
        type: Array,
        required: false
    },
    case: {
        type: Array,
        required: false
    },
    'case fans':{
        type: Array,
        required: false
    },
    'cpu cooler':{
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Input', InputSchema);