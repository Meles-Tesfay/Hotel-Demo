import User from "../models/user.js";
import { isApprovedOwner } from "../utils/userHelpers.js";

export const getUserData = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(404).json({ success: false, message: "User data not found after authentication." });
        }

        const role = req.user.role;
        const recentSearchedCities = req.user.recentSearchedCities || [];
        const isOwner = isApprovedOwner(req.user);
        const isAdmin = role === "admin";

        res.json({
            success: true,
            role,
            recentSearchedCities,
            isOwner,
            isAdmin,
            ownerStatus: req.user.ownerStatus || "none",
            rejectionReason: req.user.rejectionReason || "",
            username: req.user.username,
            email: req.user.email,
            image: req.user.image,
            phone: req.user.phone || "",
            bio: req.user.bio || "",
        });
    } catch (error) {
        console.error("getUserData Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const storeRecentSearchedCities = async (req, res) => {
    try {
        const { recentSearchedCity } = req.body;
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found in DB." });
        }

        if (!user.recentSearchedCities) user.recentSearchedCities = [];

        if (user.recentSearchedCities.length < 3) {
            user.recentSearchedCities.push(recentSearchedCity)
        } else {
            user.recentSearchedCities.shift();
            user.recentSearchedCities.push(recentSearchedCity)
        }

        await user.save();
        res.json({ success: true, message: "City added" })

    } catch (error) {
        console.error("Store Recent Search Error:", error);
        res.status(500).json({ success: false, message: error.message })
    }
};
