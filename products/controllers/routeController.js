const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

        // add routes
// Index
router.get('/', dataController.index, viewController.index);
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome);
//New
router.get('/new', viewController.new);
// Update
router.put('/:id', dataController.update, viewController.redirectShow);
//buy
router.patch('/:id', dataController.buy, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectHome);
// Edit
router.get('/:id/edit', dataController.show, viewController.edit);
// Show
router.get('/:id', dataController.show, viewController.show);



// export router
module.exports = router;