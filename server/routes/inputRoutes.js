const express = require('express');
const Input = require('../models/InputModel');
const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const lists = await Input.find();
        res.json(lists);
    }catch(err){
        res.json({message:err})
    }
});

router.post('/', async (req, res) =>{
    const list = new Input(req.body);
    try{
        const saved = await list.save();
        res.json(saved._id);
    }
    catch(err){
        res.json({message:err})
    }
});

router.get('/:id', async (req, res) => {
    const list = await Input.findById(req.params.id);
    try{
        res.json(list);
    } catch(err){
        res.json({message:err});
    }
});

module.exports = router;