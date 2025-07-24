import express from "express";
import individual from "../models/indi.models.js";
import { body, validationResult } from "express-validator";
import Help from "../models/help.module.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../middleware/auth.js";


const Indrouter = express.Router();


Indrouter.use(express.json());
Indrouter.use(express.urlencoded({ extended: true }));

Indrouter.post("/register", async (req, res) => {
  const { username, email, password, role, city, fullName } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const existinguser = await individual.findOne({ email });
    if (existinguser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const existinguserName = await individual.findOne({ username });
    if (existinguserName) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await individual.create({
      username,
      email,
      password: hashedPassword,
      role,
      fullName,
      city,
    });

    res.status(201).json({ message: "NGO registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sign-up Failed" });
  }
});

Indrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const myUser = await individual.findOne({ email: email.toLowerCase() });

    if (!myUser) {
      return res
        .status(400)
        .json({ message: "Mail or Password is Incorrect " });
    }
    const CheckPass = await bcrypt.compare(password, myUser.password);

    if (!CheckPass) {
      return res
        .status(400)
        .json({ message: "Mail or Password is Incorrect " });
    }

    const token = jwt.sign(
      { id: myUser._id, username: myUser.username, email: myUser.email , role: myUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    res.send({
      message: "Login Successful",
      token,
      user: {
        id: myUser._id,
        username: myUser.username,
        email: myUser.email,
        role: myUser.role,
        fullName: myUser.fullName,
        city: myUser.city,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
  }
});

Indrouter.post("/help", auth, async (req, res) => {
  const { name,  city, context , helpType , urgency } = req.body;
  
  try {
    const newHelp = await Help.create({
      name,
      city,
      context,
      helpType,
      urgency,
      user_id: req.user.id
    });

    res.status(201).json({ message: "You Have Been Heard" });

  } catch (error) {
    res.status(500).json({ message: "Your Request Have Not Been Registerd , Try again " });
  }
});

export default Indrouter;
