import mongoose from "mongoose"             //il ongoose howa illi mechi yorbot il base de donnee w il express
const userSchema=mongoose.Schema({
    name:{ type:String,required:true },
    telephone:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    register_date:{type:String, required:false},
})
const User=mongoose.model('User',userSchema);
export default User                    //hethi t5alik t importi bd (Categorie) fi fichier ekher 