import mongoose  from "mongoose";
import Commande from "../models/commande.js";
import Categorie from "../models/commande.js";

export const getCommandes=async(req,res)=>{  //async : asynchrone
    try{
        const com = await Commande.find(); //yjibli la liste des categories
        res.status(200).json(com);
    }
    catch(error){
        res.status(404).json({message : error.message});
    }
}

export const createCommande=async(req, res)=>{
    const{refcommande,dateAchat,mt_total,paye}=req.body;
    const newCommande=new Commande({refcommande:refcommande,dateAchat:dateAchat,mt_total:mt_total,paye:paye})
    try{
        await newCommande.save();
        res.status(201).json(newCommande);  //200 w ila 201 c kifkif
    }
    catch(error){
        res.status(409).json({message : error.message});  //404 ou 409 c kifkif
    }
}
//**************************************************************
export const deleteCommande = async (req, res) => {
    const id  = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de comamnde avec l'ID: ${id}`);
    await Commande.findByIdAndDelete(id);
    res.json({ message: "commande deleted successfully." });
    }

export const getCommandeByID=async(req, res) => {
    try{
        const com = await Commande.findById(req.params.id);   //
        res.status(200).json(com);  //200 w ila 201 c kifkif
    }
    catch(error){
        res.status(404).json({message : error.message});  //404 ou 409 c kifkif
    }
}

export const updateCommande=async(req, res)=>{
    const id=req.params.id;
    const {refcommande,dateAchat,mt_total,paye}=req.body;
    //if(! mongoose.Types.objectID.isValid(id)) return res.status(404).send(`pas de cztegorie avec un id : ${id}`);
    const com1={
        refcommande:refcommande,dateAchat:dateAchat,mt_total:mt_total,paye:paye,_id:id
    };
    await Commande.findByIdAndUpdate(id,com1);
    res.json(com1);
}