const mongoose =require("mongoose");
const registerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{
 timestamps:true,
})

const registerModel=mongoose.model('register',registerSchema)
module.exports=registerModel