import express from 'express'
import { getUsers, createUser, deleteUser, getUserByID, updateUser, getuserBYEmail } from '../controllers/users.controllers.js';
const router = express.Router();
router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser)
router.get('/:id', getUserByID)
router.put('/:id', updateUser)
router.post('/login', getuserBYEmail);

export default router;