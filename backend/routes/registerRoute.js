const express = require("express");
const router = express.Router();
const Register = require("../models/registerSchema");

router.post("/register", async (req, res) => {
  const newuser = new Register(req.body);

  try {
    const user = await newuser.save();
    res.send('User registered successfully');
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
  
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const user = await Register.findOne({ email: email, password: password });
        if (user) {
          res.status(200).json({ message: 'Login successful', user: user });
        } else {
          res.status(422).json({ message: 'Invalid email or password' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });
  
  router.get('/getallusers',async(req,res)=>{
    try{
        const users = await Register.find()
        res.send(users)
    }
    catch(error){
        return res.status(400).json({error});
    }
})

module.exports = router;
