const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
    firstName: { type: String,
                required: true },
    lastName: { type: String,
                required: true },
    emailAddress: { type: String,
                    required: true,
                    lowercase: true,
                    unique: true },
    password: { type: String,
                required: true,
                minlength: [6, "Your password needs to be at least 6 characters long."],
                }
}, {
  timestamps: true
})

// User Model
const User = mongoose.model("User", userSchema);

// Export
module.exports = User;