import express from 'express';
import {getArticles, getArticleByID, createArticle, updateArticle,deleteArticle} from '../controllers/articles.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();
router.get('/',getArticles);
router.post('/', createArticle);
router.get('/:id', getArticleByID);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);
export default router;