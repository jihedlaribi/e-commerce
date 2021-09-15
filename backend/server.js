const express = require("express");
const prouductRouters = require('./routes/productRoutes');
require('dotenv').config();
const connectDB=require('./config/db')
const User =require('./routes/User')
const user = require("./models/User");
connectDB();



const app = express()
app.use(express.json())
app.use("/api/products", prouductRouters);
app.use('/user', User)

app.post("/user/add", async (req, res) => {
    const {fullName, email, age,password,role } = req.body;
    const newUser = new user({
      fullName:req.body.fullName,
      email:req.body.email,
      age:req.body.age,
      password:req.body.password,
      role:req.body.role
    });
    try {
      await newUser.save();
      res.send(newUser);
    } catch (error) {
      res.send("post error");
    }
  });
  //get all users
  app.get("/user/get", async(req,res)=> {
  try {
      const users = await user.find()
      res.send(users)
  } catch (error) {
      res.send("get error")
  }
  })
  //Edit user by id
  app.put("/user/update/:id", async (req, res) => {
      try {
        let editedUser = await user.findByIdAndUpdate(
          req.params.id,
          { ...req.body },
          { new: true }
        );
        res.send(editedUser);
      } catch (error) {
        res.send("update user error");
      }
    });
    //Delete user by id
    app.delete("/user/delete/:id", async(req,res) => {
  try {
      await user.findByIdAndDelete(req.params.id)
      res.send("delete succesfuly")
      
  } catch (error) {
      res.send("delete error")
      
  }
  
  
    })
  


const PORT = process.env.PORT || 5000
app.listen(PORT,(err )=> err ? console.log(err) : console.log(`server running on port ${PORT}`))