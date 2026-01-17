const express = require('express')
const router = express.Router();
const person = require('../models/person');

//post route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body // assuming the request body contains the person data

        // Create a new person document using the mongoose model
        const newperson = new person(data);

        // Save the new person to the database
        const response = await newperson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


// Get method to get the person
router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype; // Extract the work type from the url paramater
        if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {

            const response = await person.find({ work: worktype });
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Internal work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id; // Extract the id form the url parameter
        const updatedpersondata = req.body; // Updated data for the person 

        const response = await person.findByIdAndUpdate(personid, updatedpersondata, {
            new: true, // Return updated document
            runValidators: true, // Run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data Updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const personid = req.params.id; // Extract the id form the url parameter

        // Assuming you have a person model
        const response = await person.findByIdAndDelete(personid);

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('Data delete');
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;