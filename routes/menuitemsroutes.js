const express = require('express')
const router = express.Router();
const menuitems = require('./../models/menuitems');

// Post method to add a menu items
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newmenu = new menuitems(data);
        const response = await newmenu.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Get method to get the  menu items
router.get('/', async (req, res) => {
    try {
        const data = await menuitems.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/:tastetype', async (req, res) => {
    try {
        const tastetype = req.params.tastetype; // Extract the work type from the url paramater
        if (tastetype == 'spicy' || tastetype == 'sweet' || tastetype == 'sour') {

            const response = await menuitems.find({ taste: tastetype });
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
        const menuitemsid = req.params.id; // Extract the id form the url parameter
        const updatedmenuitemsdata = req.body; // Updated data for the person 

        const response = await menuitems.findByIdAndUpdate(menuitemsid, updatedmenuitemsdata, {
            new: true, // Return updated document
            runValidators: true, // Run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Menuitems not found' });
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
        const menuitemsid = req.params.id; // Extract the id form the url parameter

        // Assuming you have a person model
        const response = await menuitems.findByIdAndDelete(menuitemsid);

        if (!response) {
            return res.status(404).json({ error: 'Menuitems not found' });
        }
        console.log('Data delete');
        res.status(200).json({ message: 'Menuitems deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;