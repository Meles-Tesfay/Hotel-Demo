import Hotel from "../models/Hotel.js";
import Hospitality from "../models/Hospitality.js";
import HospitalityOrder from "../models/HospitalityOrder.js";
import { v2 as cloudinary } from "cloudinary";

const approvedHotelIds = async () => {
    const hotels = await Hotel.find({
        $or: [{ status: "approved" }, { status: { $exists: false } }],
    }).select("_id");
    return hotels.map((h) => h._id.toString());
};

export const createHospitality = async (req, res) => {
    try {
        const { title, description, category, price, features } = req.body;
        const hotel = await Hotel.findOne({ owner: req.user._id });

        if (!hotel) {
            return res.json({ success: false, message: "No hotel found for this owner" });
        }

        if (!title || !category || !price) {
            return res.json({ success: false, message: "Title, category, and price are required" });
        }

        if (!req.file) {
            return res.json({ success: false, message: "Image is required" });
        }

        const upload = await cloudinary.uploader.upload(req.file.path);
        const image = upload.secure_url;

        let parsedFeatures = [];
        try {
            parsedFeatures = JSON.parse(features || "[]");
        } catch {
            parsedFeatures = [];
        }

        await Hospitality.create({
            hotel: hotel._id.toString(),
            title,
            description: description || "",
            category,
            price: +price,
            features: parsedFeatures,
            image,
        });

        res.json({ success: true, message: "Hospitality item created successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const getHospitalities = async (req, res) => {
    try {
        const hotelIds = await approvedHotelIds();

        const items = await Hospitality.find({
            isAvailable: true,
            hotel: { $in: hotelIds },
        })
            .populate({
                path: "hotel",
                populate: { path: "owner", select: "username image" },
            })
            .sort({ createdAt: -1 });

        res.json({ success: true, hospitalities: items });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const getOwnerHospitalities = async (req, res) => {
    try {
        const hotel = await Hotel.findOne({ owner: req.user._id });
        if (!hotel) {
            return res.json({ success: false, message: "No hotel found" });
        }

        const hospitalities = await Hospitality.find({ hotel: hotel._id.toString() })
            .populate("hotel")
            .sort({ createdAt: -1 });

        res.json({ success: true, hospitalities });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const createHospitalityOrder = async (req, res) => {
    try {
        const { hospitalityId, quantity = 1 } = req.body;
        const userId = req.user._id;

        if (!hospitalityId) {
            return res.status(400).json({ success: false, message: "Hospitality item is required" });
        }

        const item = await Hospitality.findById(hospitalityId).populate("hotel");
        if (!item || !item.isAvailable) {
            return res.json({ success: false, message: "This service is not available" });
        }

        const hotel = await Hotel.findById(item.hotel._id || item.hotel);
        if (!hotel || (hotel.status && hotel.status !== "approved")) {
            return res.json({ success: false, message: "Hotel is not available for orders" });
        }

        const qty = Math.max(1, Number(quantity) || 1);
        const totalPrice = item.price * qty;

        const order = await HospitalityOrder.create({
            user: userId,
            hospitality: item._id.toString(),
            hotel: hotel._id.toString(),
            totalPrice,
            quantity: qty,
            paymentMethod: "Pay At Hotel",
        });

        res.json({
            success: true,
            message: "Hospitality order placed successfully",
            order,
        });
    } catch (error) {
        console.error("createHospitalityOrder:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const toggleHospitalityAvailability = async (req, res) => {
    try {
        const { hospitalityId } = req.body;
        const item = await Hospitality.findById(hospitalityId);

        if (!item) {
            return res.json({ success: false, message: "Item not found" });
        }

        const hotel = await Hotel.findOne({ owner: req.user._id, _id: item.hotel });
        if (!hotel) {
            return res.json({ success: false, message: "Not authorized" });
        }

        item.isAvailable = !item.isAvailable;
        await item.save();

        res.json({ success: true, message: "Availability updated" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
