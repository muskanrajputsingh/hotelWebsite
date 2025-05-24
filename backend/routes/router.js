var express = require("express");

var room = require("../models/roomSchema")

const router = express.Router()

router.get("/room/:id", async (req, res) => {
    const id = req.params.id;
    const p = await room.find({ "_id": id })
    res.send(p);
});

router.put("/room/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const p = await room.updateOne({ "_id": id }, data);
    res.send(p);
})

router.delete("/room/:id", async (req, res) => {
    const id = req.params.id;
    const p = await room.findOne({ "_id": id })
    const d = await room.deleteOne(p)
    res.send(d);
})

router.get("/room", async (req, res) => {
    const p = await room.find();
    res.send(p);
})
router.post("/room", async (req, res) => {
    const p = new room({
        name: req.body.name,
        maximumMembers: req.body.maximumMembers,
        phoneNo:req.body.phoneNo,
        rentperday: req.body.rentperday,
        imgurls: req.body.imgurls,
        currentbookings: req.body.currentbookings,
        roomType: req.body.roomType,
        description: req.body.description,

    })
    await p.save();
    res.send(p);
})

router.post("/addroom",async(req,res)=>{
    try{
        const newroom = new room(req.body)
        await newroom.save()
        res.send('New Room Added Successfully')
    }catch(error){
        return res.status(400).json({error});
    }
})

module.exports = router
