const express = require('express');
const userController = require('./../controllers/userController');
const router = express.Router();


router
.route('/')
.get(userController.getAllUser)
.post(userController.createUser);


// router
// .patch(userController.updateUser);


router
.route('/:id')
.post(userController.getOneUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;