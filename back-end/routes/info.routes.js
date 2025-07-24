import express from 'express'
import jwt from "jsonwebtoken";
import auth from "../middleware/auth.js";
import cookieParser from 'cookie-parser'

const infoRouter = express.Router();

infoRouter.use(cookieParser())

infoRouter.get('/', (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ username: decoded.username, email: decoded.email, role: decoded.role });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});


export default infoRouter