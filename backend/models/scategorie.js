import mongoose from "mongoose"
import Categorie from "./categorie.js"
const scategorieSchema=mongoose.Schema({                //scategorie : hiya sous categorie
    nomscategorie:{ type:String,required:true },
    imagescat:{type:String, required:false,unique:true},   //imagescaat : image sous categorie
    categorieID:{type:mongoose.Schema.Types.ObjectId,
    ref : Categorie}
})

scategorieSchema.pre('remove', async function(req,res,next) { 
    Categorie.deleteMany({ Scategorie: { $in: [this._id] } }, function(err) {})
        next();
     })

const Scategorie=mongoose.model('Scategorie',scategorieSchema);
export default Scategorie 
