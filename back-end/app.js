import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import NGOrouter from "./routes/ngo.routes.js";
import Indrouter from "./routes/indi.routes.js";


const app = express();

dotenv.config();
connectDB();


const PORT = process.env.PORT

app.use('/ngo' , NGOrouter)
app.use('/user', Indrouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});