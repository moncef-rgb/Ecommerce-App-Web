import mongoose from "mongoose"             //il ongoose howa illi mechi yorbot il base de donnee w il express
const categorieSchema=mongoose.Schema({
    nomcategorie:{ type:String,required:true ,unique:true},
    imagecategorie:{type:String, required:false}
})
const Categorie=mongoose.model('Categorie',categorieSchema);
export default Categorie                    //hethi t5alik t importi bd (Categorie) fi fichier ekher 