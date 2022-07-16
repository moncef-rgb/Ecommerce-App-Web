import mongoose from "mongoose"             //il ongoose howa illi mechi yorbot il base de donnee w il express
const commandeSchema=mongoose.Schema({
    refcommande:{ type:String,required:true },
    dateAchat:{type:String, required:true},
    mt_total:{ type:String,required:true },
    paye:{type:String, required:true}
})
const Commande=mongoose.model('Commande',commandeSchema);
export default Commande                   //hethi t5alik t importi bd (Categorie) fi fichier ekher 
