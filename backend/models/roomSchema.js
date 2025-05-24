const mongoose=require("mongoose");
const roomSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    maximumMembers:{
        type:Number,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    rentperday:{
        type:Number,
        required:true
    },
    imgurls:[],
    currentbookings:[],
    roomType:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},
{
timestamps:true,
}
)

const roomModel=mongoose.model('room',roomSchema)

module.exports=roomModel