import User from "../models/user.js";
import Hotel from "../models/Hotel.js";
import { formatUser } from "../utils/userHelpers.js";

export const getOwnerProfile = async (req, res) => {
    try {
        const user = req.user;
        const hotel = await Hotel.findOne({ owner: user._id });

        res.json({
            success: true,
            profile: {
                username: user.username,
                email: user.email,
                phone: user.phone,
                bio: user.bio,
                image: user.image,
                ownerStatus: user.ownerStatus,
                rejectionReason: user.rejectionReason,
            },
            hotel: hotel ? {
                name: hotel.name,
                address: hotel.address,
                contact: hotel.contact,
                city: hotel.city,
                description: hotel.description,
                status: hotel.status,
            } : null,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateOwnerProfile = async (req, res) => {
    try {
        const { username, phone, bio, hotel } = req.body;
        const user = await User.findById(req.user._id);

        if (username) user.username = username;
        if (phone !== undefined) user.phone = phone;
        if (bio !== undefined) user.bio = bio;
        await user.save();

        const hotelDoc = await Hotel.findOne({ owner: user._id });
        if (hotelDoc && hotel) {
            if (hotel.name) hotelDoc.name = hotel.name;
            if (hotel.address) hotelDoc.address = hotel.address;
            if (hotel.contact) hotelDoc.contact = hotel.contact;
            if (hotel.city) hotelDoc.city = hotel.city;
            if (hotel.description !== undefined) hotelDoc.description = hotel.description;
            await hotelDoc.save();
        }

        res.json({
            success: true,
            message: user.ownerStatus === "pending"
                ? "Profile updated. Waiting for admin approval."
                : "Profile updated successfully",
            user: formatUser(user),
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
