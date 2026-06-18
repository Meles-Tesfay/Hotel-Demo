import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    username: { type: String, required: true },
    image: { type: String, required: true },
    phone: { type: String, default: "" },
    bio: { type: String, default: "" },
    role: { type: String, enum: ["user", "hotelOwner", "admin"], default: "user" },
    ownerStatus: {
        type: String,
        enum: ["none", "pending", "approved", "rejected"],
        default: "none",
    },
    rejectionReason: { type: String, default: "" },
    recentSearchedCities: [{ type: String }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
