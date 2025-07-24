import express from "express";
import Ngo from "../models/ngo.model.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

const NGOrouter = express.Router();


NGOrouter.use(express.json());
NGOrouter.use(express.urlencoded({ extended: true }));

NGOrouter.post("/register", async (req, res) => {
  const { username, email, password, role, fieldOfWork, city, area } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const existingNgo = await Ngo.findOne({ email });
    if (existingNgo) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const existingNgoUN = await Ngo.findOne({ username });
    if (existingNgoUN) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newNgo = await Ngo.create({
      username,
      email,
      password: hashedPassword,
      role,
      category: fieldOfWork,
      city,
      area,
    });

    res.status(201).json({ message: "NGO registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sign-up Failed" });
  }
});

NGOrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const myNGO = await Ngo.findOne({ email: email.toLowerCase() });

    if (!myNGO) {
      return res
        .status(400)
        .json({ message: "Mail or Password is Incorrect " });
    }
    const CheckPass = await bcrypt.compare(password, myNGO.password);

    if (!CheckPass) {
      return res
        .status(400)
        .json({ message: "Mail or Password is Incorrect " });
    }

    const token = jwt.sign(
      { id: myNGO._id, username: myNGO.username, email: myNGO.email ,role:myNGO.role},
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
        id: myNGO._id,
        username: myNGO.username,
        email: myNGO.email,
        role: myNGO.role,
        category: myNGO.category,
        city: myNGO.city,
        area: myNGO.area,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
    console.log(error);
  }
});

export default NGOrouter;
