import express from "express";
import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
    maxlength: 15,
    lowercase: true,
    unique: true
  },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    role: {
        type: String,
        enum: ['ngo', 'individual'],
        required: true,
        lowercase: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    area: {
        type: String,
        required: true,
        lowercase: true,
        trim: true  
    },


})

const Ngo = mongoose.model("Ngo", ngoSchema);

export default Ngo;