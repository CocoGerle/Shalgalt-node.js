const express = require("express")
const dotenv = require("dotenv")
var path = require('path')
const logger = require("./middleWares/logger")
const errorHandler = require ("./middleWares/error")
const connectDB = require("./config/db")

dotenv.config({path: "./config/config.env"})
const app = express();
connectDB()


const userRoute = require("./routes/userRoute")
const categoryRoute = require("./routes/categoryRoute")


app.use(express.json()) 
app.use(errorHandler); 
app.use("/user", userRoute);
app.use("/category", categoryRoute);



app.listen(process.env.PORT, 
    console.log(`Server ${process.env.PORT} port aslaa`))