const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", LeadSchema);
