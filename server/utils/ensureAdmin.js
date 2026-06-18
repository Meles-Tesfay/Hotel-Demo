import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "../models/user.js";

const ensureAdmin = async () => {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
        console.log("Admin seed skipped: set ADMIN_EMAIL and ADMIN_PASSWORD in .env");
        return;
    }

    const normalizedEmail = email.toLowerCase();
    const existing = await User.findOne({ email: normalizedEmail }).select("+password");

    if (existing) {
        let changed = false;

        if (existing.role !== "admin") {
            existing.role = "admin";
            existing.ownerStatus = "none";
            changed = true;
        }

        // Legacy Clerk accounts have no password — set from ADMIN_PASSWORD
        if (!existing.password) {
            existing.password = await bcrypt.hash(password, 10);
            changed = true;
            console.log("Admin password set for existing account:", normalizedEmail);
        }

        if (changed) {
            await existing.save();
            console.log("Admin account updated:", normalizedEmail);
        }
        return;
    }

    const userId = new mongoose.Types.ObjectId().toString();
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        _id: userId,
        email: normalizedEmail,
        username: "Admin",
        password: hashedPassword,
        image: `https://api.dicebear.com/7.x/avataaars/svg?seed=admin`,
        role: "admin",
        ownerStatus: "none",
        recentSearchedCities: [],
    });

    console.log("Admin account created:", normalizedEmail);
};

export const migrateLegacyOwners = async () => {
    const Hotel = (await import("../models/Hotel.js")).default;
    const User = (await import("../models/user.js")).default;

    await User.updateMany(
        { role: "hotelOwner", ownerStatus: "none" },
        { $set: { ownerStatus: "approved" } }
    );
    await Hotel.updateMany(
        { status: { $exists: false } },
        { $set: { status: "approved" } }
    );
};

export default ensureAdmin;
