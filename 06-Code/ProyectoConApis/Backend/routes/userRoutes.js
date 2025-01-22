const express = require('express');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');


const router = express.Router();

router.post('/create-user', createUser);
router.get('/get-all-users', getAllUsers);
router.get('/get-user-by-id/:id', getUserById);
router.put('/update-user/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);


module.exports = router;
