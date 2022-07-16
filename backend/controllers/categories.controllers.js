import mongoose  from "mongoose";
import Categorie from "../models/categorie.js";

export const getCategories=async(req,res)=>{  //async : asynchrone
    try{
        const cat = await Categorie.find(); //yjibli la liste des categories
        res.status(200).json(cat);
    }
    catch(error){
        res.status(404).json({message : error.message});
    }
}

export const createCategorie=async(req, res)=>{
    const{nomcategorie,imagecategorie}=req.body;
    const newCategorie=new Categorie({nomcategorie:nomcategorie,imagecategorie:imagecategorie})
    try{
        await newCategorie.save();
        res.status(201).json(newCategorie);  //200 w ila 201 c kifkif
    }
    catch(error){
        res.status(409).json({message : error.message});  //404 ou 409 c kifkif
    }
}
export const deleteCategorie = async (req, res) => {
    const id  = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de categorie avec l'ID: ${id}`);
    await Categorie.findByIdAndDelete(id);
    res.json({ message: "categorie deleted successfully." });
    }

export const getCategorieByID=async(req, res) => {
    try{
        const cat = await Categorie.findById(req.params.id);   //
        res.status(200).json(cat);  //200 w ila 201 c kifkif
    }
    catch(error){
        res.status(404).json({message : error.message});  //404 ou 409 c kifkif
    }
}

export const updateCategorie=async(req, res)=>{
    const id=req.params.id;
    const {nomcategorie,imagecategorie}=req.body;
    //if(! mongoose.Types.objectID.isValid(id)) return res.status(404).send(`pas de cztegorie avec un id : ${id}`);
    const cat1={
        nomcategorie:nomcategorie,imagecategorie:imagecategorie,_id:id
    };
    await Categorie.findByIdAndUpdate(id,cat1);
    res.json(cat1);
}