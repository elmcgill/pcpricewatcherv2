const express = require('express');
const Input = require('../models/InputModel');
const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const parts = {
            id: 1234,
            cpu:'sample cpu',
            mobo: 'sample mobo',
            gpu: 'sample gpu',
            ram: 'sample ram',
            psu: 'sample psu',
            case: 'sample case',
            casefans: 'sample case fans',
            cpucooler: 'sample cpu cooler'
        }
        res.json(parts);
    }catch(err){
        res.json({message:err})
    }
});

module.exports = router;