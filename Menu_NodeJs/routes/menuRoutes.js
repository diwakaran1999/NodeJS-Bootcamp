const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
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

router.get('/:tasteType', async (req, res) => { 
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'Spicy' || tasteType == 'Salty' || tasteType == 'Sour' || tasteType == 'Sweet') {
            const response = await MenuItem.find({ taste: tasteType });
            console.log('filtered by taste type');
            res.status(200).json(response);
        }
        else {
            res.status(400).json({ error: 'Invalid taste' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const updatedData = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuId, updatedData, {
            new: true,
            runValidators: true,
        })

        if (!menuId) {
            return res.status(400).json({ error: 'Menu Item not found' });
        }
        console.log('Menu Data Updated');
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Invalid Menu Id' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const menu = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menu);

        if (!response) {
            return res.status(400).json({ error: 'Menu item not found' });
        }

        console.log('Menu item deleted successfully');
        res.status(200).json({message: 'Menu item deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Invalid menu id' });
    }
})

module.exports = router;