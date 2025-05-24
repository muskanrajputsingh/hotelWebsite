const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");
const Room = require("../models/roomSchema");

const { v4: uuidv4 } = require("uuid");
const stripe = require('stripe')('sk_test_51OxYg7SGQJO75uZsgksgjvETsaOlwfbd6oYU73AgaqgE9mWqs1UzguYpoK9hMKPRLuFYKUfXFv7ZdDqvPjjvqm57008wDWbfZR');

router.post("/bookings", async (req, res) => {
    const { rooms, userid, startDate, endDate, totalamount, totaldays, token } = req.body;

    try {
        // Create a Payment Intent with the total amount
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalamount * 100, // Amount in cents
            currency: 'inr', // Currency code (e.g., 'inr' for Indian Rupees)
        });

        // Proceed with booking if Payment Intent creation is successful
        if (paymentIntent.client_secret) {
            const newBooking = new Booking({
                rooms: rooms.name,
                roomid: rooms._id,
                userid,
                startDate: moment(startDate).format('DD-MM-YYYY'),
                endDate: moment(endDate).format('DD-MM-YYYY'),
                totalamount,
                totaldays,
                transactionId: paymentIntent.id // Use Payment Intent ID as transaction ID
            });

            const booking = await newBooking.save();
            const roomtemp = await Room.findOne({ _id: rooms._id });
            roomtemp.currentbookings.push({
                bookingid: booking._id,
                startDate: moment(startDate).format('DD-MM-YYYY'),
                endDate: moment(endDate).format('DD-MM-YYYY'),
                userid: userid,
                status: 'confirmed'
            });

            // Save the changes made to roomtemp
            await roomtemp.save();

            // Send success response with client secret
            res.json({ clientSecret: paymentIntent.client_secret });
        } else {
            throw new Error("Failed to create Payment Intent.");
        }
    } catch (error) {
        console.error("Error during booking:", error);
        res.status(500).json({ error: "An error occurred during booking." });
    }
});


router.post("/getbookingsbyuserid",async(req,res)=>{
const userid = req.body.userid

try{
 const bookings=await Booking.find({userid:userid})
 res.send(bookings)
}catch(error){
 return res.status(400).json({error})
}
})

router.post("/cancelbooking",async(req,res)=>{
    const {bookingid,roomid}=req.body

    try{
        const bookingitem = await Booking.findOne({_id:bookingid})
        bookingitem.status='cancelled'
        await bookingitem.save()
        const room =await Room.findOne({_id:roomid})
        
        const bookings=room.currentbookings
        const temp=bookings.filter(booking=>booking.bookingid.toString()!==bookingid)
        room.currentbookings = temp
        await room.save()
        res.send('your booking cancelled successfully.')

    }catch(error){
        console.log(error)
        return res.status(400).json({error});
    }
})

router.get("/getallbookings",async(req,res)=>{
 try{
  const bookings = await Booking.find()
  res.send(bookings)
 }catch(error){
  return res.status(400).json({error})
 }
})

module.exports = router;









// const express=require("express");
// const router=express.Router();
// const Booking=require("../models/booking");
// const moment = require("moment");
// const Room = require("../models/roomSchema");

// const { v4:uuidv4 } = require("uuid") ;
// const stripe=require('stripe')('sk_test_51OxYg7SGQJO75uZsgksgjvETsaOlwfbd6oYU73AgaqgE9mWqs1UzguYpoK9hMKPRLuFYKUfXFv7ZdDqvPjjvqm57008wDWbfZR')


// router.post("/bookings",async(req,res)=>{

// const {rooms,userid,startDate,endDate,totalamount,totaldays} = req.body

// //payment logic 
//    try{
//     const customer = await stripe.customers.create({
//         email:token.email,
//         source:token.id
//     })

//    const payment =await stripe.charges.create(
//     {
//      amount : totalamount * 100,
//      customer:customer.id,
//      currency:'inr',
//      receipt_email:token.email
//     },{
//         idempotencyKey : uuidv4()
//     }
//    )
//  //when payment success then booking info will save in database
//   if(payment){
         
//     const newbooking= new Booking({
//          rooms:rooms.name,
//          roomid:rooms._id,
//          userid,
//          startDate:moment(startDate).format('DD-MM-YYYY'),
//          endDate:moment(endDate).format('DD-MM-YYYY'),
//          totalamount,
//          totaldays,
//          transactionId:'98amx45b45670'
      
//         })
        
//         const booking = await newbooking.save()
//         const roomtemp = await Room.findOne({_id : rooms._id})
//         roomtemp.currentbookings.push({
//         bookingid : booking._id , 
//         startDate:moment(startDate).format('DD-MM-YYYY') , 
//         endDate:moment(endDate).format('DD-MM-YYYY'),
//         userid:userid,
//         status:booking.status
//         });
//   }

//    res.send('Payment Successfull , Your Room is Booked')
//    }
//    catch(error){
//    return res.status(400).json({error});
//    }

// });

// module.exports=router



// try{
//     const newbooking= new Booking({
//      rooms:rooms.name,
//      roomid:rooms._id,
//      userid,
//      startDate:moment(startDate).format('DD-MM-YYYY'),
//      endDate:moment(endDate).format('DD-MM-YYYY'),
//      totalamount,
//      totaldays,
//      transactionId:'98amx45b45670'
  
//     })
    
//     const booking = await newbooking.save()
//     const roomtemp = await Room.findOne({_id : rooms._id})
//     roomtemp.currentbookings.push({
//     bookingid : booking._id , 
//     startDate:moment(startDate).format('DD-MM-YYYY') , 
//     endDate:moment(endDate).format('DD-MM-YYYY'),
//     userid:userid,
//     status:booking.status
//     });
//     await roomtemp.save()
//     res.send('room Booked Successfully')
//    }
//     catch(error){
//     return res.status(400).json({error})
//    }