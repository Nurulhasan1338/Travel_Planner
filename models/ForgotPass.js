const mongoose = require("mongoose");

const ForgotPassSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    verificationLink : String,
    expiresAt: {
        type: Date,
        default: Date.now() + 600000
    }
},
  { timestamps: true }
);

const ForgotPass = mongoose.model("ForgotPass", ForgotPassSchema);

module.exports = ForgotPass;
