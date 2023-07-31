const mongoose = require("mongoose");

const verifySchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
    },
    password: String,
    

    verificationLink : String,

    expiresAt: {
        type: Date,
        default: Date.now() + 600000
    }



},
  { timestamps: true }
);

const Verify = mongoose.model("Verify", verifySchema);

module.exports = Verify;
