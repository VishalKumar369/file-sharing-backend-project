require("dotenv").config();
const mongoose = require("mongoose");
const fileRouter = require("./routes/file")

const express = require("express"); 
const app = express();
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.DATABASE_URL);
app.set("view engine","ejs")

app.use(fileRouter);

app.listen(process.env.PORT)