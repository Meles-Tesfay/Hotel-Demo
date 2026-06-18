import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { isApprovedOwner } from "../utils/userHelpers.js";

export const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not authenticated" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "hotel-booking-dev-secret");

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth error:", error.message);
        return res.status(401).json({ success: false, message: "Authentication failed" });
    }
};

export const requireAdmin = (req, res, next) => {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ success: false, message: "Admin access only" });
    }
    next();
};

export const requireOwner = (req, res, next) => {
    if (!isApprovedOwner(req.user)) {
        return res.status(403).json({
            success: false,
            message: req.user?.ownerStatus === "pending"
                ? "Your account is pending admin approval"
                : "Hotel owner access only",
        });
    }
    next();
};

export const requireHotelOwnerRole = (req, res, next) => {
    if (req.user?.role !== "hotelOwner") {
        return res.status(403).json({ success: false, message: "Hotel owner access only" });
    }
    next();
};

export default protect;
