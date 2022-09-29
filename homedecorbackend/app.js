const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3000
mongoose.connect('mongodb://localhost:27017/homedecorbackend',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes
const categoryRoutes = require("./routes/category");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const product1Routes = require("./routes/product1");
const product2Routes = require("./routes/product2");
const product3Routes = require("./routes/product3");

//My Routes

app.use("/api", categoryRoutes);
app.use("/api", authRoutes);
app.use("/api",productRoutes);
app.use('/uploads', express.static('uploads'));
app.use("/api",orderRoutes);
app.use("/api",product1Routes);
app.use("/api",product2Routes);
app.use("/api",product3Routes);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))