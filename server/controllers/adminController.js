import User from "../models/user.js";
import Hotel from "../models/Hotel.js";

export const getPendingOwners = async (req, res) => {
    try {
        const owners = await User.find({ role: "hotelOwner", ownerStatus: "pending" })
            .sort({ createdAt: -1 });

        const applications = await Promise.all(
            owners.map(async (owner) => {
                const hotel = await Hotel.findOne({ owner: owner._id });
                return {
                    _id: owner._id,
                    username: owner.username,
                    email: owner.email,
                    phone: owner.phone,
                    bio: owner.bio,
                    image: owner.image,
                    createdAt: owner.createdAt,
                    hotel: hotel ? {
                        _id: hotel._id,
                        name: hotel.name,
                        address: hotel.address,
                        contact: hotel.contact,
                        city: hotel.city,
                        description: hotel.description,
                        status: hotel.status,
                    } : null,
                };
            })
        );

        res.json({ success: true, applications });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllOwners = async (req, res) => {
    try {
        const { status } = req.query;
        const filter = { role: "hotelOwner" };
        if (status && status !== "all") filter.ownerStatus = status;

        const owners = await User.find(filter).sort({ updatedAt: -1 });
        const applications = await Promise.all(
            owners.map(async (owner) => {
                const hotel = await Hotel.findOne({ owner: owner._id });
                return {
                    _id: owner._id,
                    username: owner.username,
                    email: owner.email,
                    phone: owner.phone,
                    bio: owner.bio,
                    ownerStatus: owner.ownerStatus,
                    rejectionReason: owner.rejectionReason,
                    createdAt: owner.createdAt,
                    hotel,
                };
            })
        );

        res.json({ success: true, applications });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const approveOwner = async (req, res) => {
    try {
        const { ownerId } = req.params;
        const user = await User.findById(ownerId);

        if (!user || user.role !== "hotelOwner") {
            return res.status(404).json({ success: false, message: "Owner application not found" });
        }

        user.ownerStatus = "approved";
        user.rejectionReason = "";
        await user.save();

        await Hotel.findOneAndUpdate(
            { owner: ownerId },
            { status: "approved" }
        );

        res.json({ success: true, message: "Hotel owner approved successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const rejectOwner = async (req, res) => {
    try {
        const { ownerId } = req.params;
        const { reason } = req.body;

        const user = await User.findById(ownerId);
        if (!user || user.role !== "hotelOwner") {
            return res.status(404).json({ success: false, message: "Owner application not found" });
        }

        user.ownerStatus = "rejected";
        user.rejectionReason = reason || "Application did not meet our requirements.";
        await user.save();

        await Hotel.findOneAndUpdate(
            { owner: ownerId },
            { status: "rejected" }
        );

        res.json({ success: true, message: "Hotel owner application rejected" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
