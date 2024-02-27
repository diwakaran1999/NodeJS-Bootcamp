const express = require('express');
const router = express.Router();


const MenuItem = require('../models/menuItem');


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new (data);
        const response = await newMenu.save();
        console.log('new menu saved');
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('menu fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' })
    }

});

module.exports = router;