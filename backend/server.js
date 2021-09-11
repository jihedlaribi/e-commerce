const express = require("express");
const prouductRouters = require('./routes/productRoutes');
require('dotenv').config();
const connectDB=require('./config/db')
const User =require('./routes/User')
connectDB();



const app = express()
app.use(express.json())
app.use("/api/products", prouductRouters);
app.use('/user', User)




const PORT = process.env.PORT || 5000
app.listen(PORT,(err )=> err ? console.log(err) : console.log(`server running on port ${PORT}`))