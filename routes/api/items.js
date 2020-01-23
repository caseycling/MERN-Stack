const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Items');

// @route   GET api/items
// @desc    GET ALL items
//@access   Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// @route   POST api/items
// @desc    Create an item
//@access   Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => { 
        res.json(item)
        console.log(`${newItem.name} successfully added`)
    })
})

// @route   DELETE api/items/:id
// @desc    Delete an item
//@access   Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => { 
        res.json({success: true})
        console.log(`SUCCESS: ${req.body.name} deleted`)
    }))
    .catch(err =>  { 
        res.status(404).json({success: false})
        console.log('ERROR: Item does not exist')
    });
});

module.exports = router;