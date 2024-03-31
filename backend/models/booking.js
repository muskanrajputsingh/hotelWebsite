const mongoose = require("mongoose");
const bookingSchema=mongoose.Schema({
    rooms:{
        type:String,
        required:true
    },
    roomid:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    totalamount:{
        type:Number,
        required:true
    },
    totaldays:{
        type:String,
        required:true
    },
    transactionId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'booked'
    }

},{
    timestamps:true,
})

const bookingmodel = mongoose.model('bookings',bookingSchema);
module.exports = bookingmodel