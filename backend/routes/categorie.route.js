import express from 'express'
import { getCategories, createCategorie, deleteCategorie, getCategorieByID, updateCategorie } from '../controllers/categories.controllers.js';
const router = express.Router();
import { auth } from '../middlewares/auth.js';

router.get('/', getCategories);
router.post('/', createCategorie);
router.delete('/:id', deleteCategorie)
router.get('/:id', getCategorieByID)
router.put('/:id', updateCategorie)
export default router;