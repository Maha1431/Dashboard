const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.Controller');
// get all the users
router.get('/', userController.getUsers);

// POST create a new user
router.post('/', userController.createUser);

// PUT update an existing user
router.put('/:id', userController.updateUser);

// DELETE delete an existing user
router.delete('/:id', userController.deleteUser);

module.exports = router;
