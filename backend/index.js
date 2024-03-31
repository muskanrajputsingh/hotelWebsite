require("dotenv").config();
const express=require("express");

require("./db/conn");
const router = require("./routes/router");
const registerRouter=require('./routes/registerRoute');
const bookingRouter=require('./routes/bookingRoute');

const cors=require("cors");
const PORT =process.env.port||5000;

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api",router);
app.use("/api",registerRouter);
app.use("/api",bookingRouter);

app.listen(PORT,()=>{
    console.log(`server start at port ${PORT}`)
});


// PVyhP4GQ22BxaqbC
