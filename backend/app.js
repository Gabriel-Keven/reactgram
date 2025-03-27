require('dotenv').config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT_;

const app = express();

//config json and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// app.use(cors({credentials:true, origin:"http://localhost:5000/api"}));


//Upload directory
app.use("/uploads", express.static(path.join(__dirname,"/uploads")));

//db connection
require('./config/db.js');

//routes
const router = require("./routes/Router.js");
app.use(cors({ credentials: true, origin: `http://localhost:3000`, optionsSuccessStatus: 200 }))    
app.use(router);

app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`);
});