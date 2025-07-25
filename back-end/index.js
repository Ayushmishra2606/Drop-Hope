import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import NGOrouter from "./routes/ngo.routes.js";
import Indrouter from "./routes/indi.routes.js";
import cmpRouter from "./routes/campaign.route.js";
import auth from "./middleware/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import infoRouter from "./routes/info.routes.js";
import apiRouter from "./routes/api.routes.js";

const app = express();

dotenv.config();
connectDB();

const allowedOrigins = [
  'https://drop-hope-frontend.vercel.app',
  'https://drop-hope-frontend-9artlzlqn-kautuks-projects.vercel.app',
  'http://localhost:5173' // optional: for local testing
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 


const PORT = process.env.PORT

app.use('/ngo' , NGOrouter)
app.use('/user', Indrouter)
app.use('/campaign',cmpRouter)
app.use('/info', infoRouter)
app.use('/api', apiRouter)
app.use("/api", cmpRouter);

app.get("/check-auth", auth, (req, res) => {
    res.status(200).json({ message: "Authenticated", user: req.user });
});

app.get("/user", auth, (req, res) => {
    if (req.user.role !== "individual") { 
        return res.status(403).json({ message: "Access denied: Not a user" });
    }
    res.status(200).json({ message: "User authenticated successfully", user: req.user });
});

app.get("/ngo", auth, (req, res) => {
    if (req.user.role !== "ngo") { 
        return res.status(403).json({ message: "Access denied: Not an NGO" });
    }
    res.status(200).json({ message: "NGO authenticated successfully", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});