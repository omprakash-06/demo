const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true                
}));
  
 connectDB();

 const adminRoute = require("./routes/adminRoute");
 const enquiryRoute = require("./routes/enquiryRoute");
 const serviceRoute = require("./routes/serviceRoute");
 const trainingRoute = require("./routes/trainingRoute");
 const testimonialRoute = require("./routes/testimonialRoute");
 
 app.use(cookieParser());
 app.use("/api/admin", adminRoute);
 app.use("/api/enquiry", enquiryRoute);
 app.use("/api/service", serviceRoute);
 app.use("/api/training",trainingRoute);
 app.use("/api/testimonial", testimonialRoute); 

app.listen(3000,()=>{
    console.log('server is running')
})