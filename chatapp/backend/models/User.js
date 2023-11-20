const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true,minlength:[3,'Minimum 3 characters'] },
    displayName: { type: String, required: true,minlength:[3,'Minimum 3 characters'] },
    emailid: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength:[5,'Minimum 5 characters'] },
    dob: { type: Date },
    resetLink: { type: String, default: ''},
    timestamp: { type: Date, default: Date.now },
  });
  
exports.user = mongoose.model("user", userSchema);