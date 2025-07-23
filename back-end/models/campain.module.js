import express from "express";
import mongoose from "mongoose";

const campainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title:{
    type:String,
    required:true,
    trim:true
  },
  city: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  desc:{
    type:String,
    required:true,
    trim:true
  },
  target:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:true,
    trim:true,
  },
  user_id:{
    type:String,
    required:true,
    trim:true,
  },
});

const Cmp =   mongoose.model("campaign", campainSchema);

export default Cmp;
