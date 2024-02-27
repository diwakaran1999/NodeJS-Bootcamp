const express = require('express');
const router = express.Router();
const Person = require('../models/person')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/:workType', async(req,res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager'|| workType=='owner') {
            const response = await Person.find({ work: workType });
            console.log('data fetched');
            res.status(200).json(response);
        }
        else {
            res.status(400).json({ error: 'Invalid worktype '});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const person = req.params.id;   //extract the id from the URL parameter
        const updatedData = req.body;   //updated data for the person

        const response = await Person.findByIdAndUpdate(person, updatedData, {
            new: true,              //return the updated document
            runValidators: true,    //run mongoose validation
        })

        if (!response) {
            return res.status(400).json({ error: 'Person not found' });
        }
        console.log('Person data updated')
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Invalid Person Id' });
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const person = req.params.id;

        const response = await Person.findByIdAndDelete(person);
        if (!response) {
            return res.status(400).json({ error: 'Person not found' });
        }
        console.log('Person deleted')
        res.status(200).json({message: 'Person deleted successfully'});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Invalid Person' });
    }
})

module.exports = router;