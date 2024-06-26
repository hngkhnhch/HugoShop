const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String, default: null  },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        phone: { type: Number, default: null },
        address: { type: String, default: null  },
        avatar: { type: String, default: null  }
    },
    {
        timestamps: true
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;