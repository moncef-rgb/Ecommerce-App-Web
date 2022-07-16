import express from 'express'
import {getCommandes,createCommande,deleteCommande,getCommandeByID,updateCommande} from'../controllers/commandes.controllers.js';
const router=express.Router();
router.get('/',getCommandes);
router.post('/',createCommande);
router.delete('/:id',deleteCommande)
router.get('/:id',getCommandeByID)
router.put('/:id',updateCommande)
export default router;