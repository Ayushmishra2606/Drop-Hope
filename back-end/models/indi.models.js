import express from "express";
import mongoose from "mongoose";

const individualSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
    maxlength: 15,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  role: {
    type: String,
    enum: ["ngo", "individual"],
    required: true,
    lowercase: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
});

const individual = mongoose.model("Individual", individualSchema);

export default individual;
