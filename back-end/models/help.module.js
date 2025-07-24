import mongoose from "mongoose";

const helpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
    maxlength: 15,
    lowercase: true,
    unique: true,
  },
  context: {
    type: String,
    required: true,
    trim: true,
  },
  helpType: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  user_id: {
    type: String,
    required: true,
    trim: true,
  },
  urgency: {
    type: String,
    required: true,
    trim: true,
  },
});

const Help = mongoose.model("Help", helpSchema);

export default Help;
