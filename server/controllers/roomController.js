import Hotel from "../models/Hotel.js";
import { v2 as cloudinary } from "cloudinary";
import Room from "../models/Room.js"

export const createRoom = async (req, res) => {
    try {
        const { title, description, roomType, pricePerNight, amenities } = req.body;
        const hotel = await Hotel.findOne({ owner: req.user._id });

        if (!hotel) return res.json({ success: false, message: "No Hotel found" });

        if (!title || !roomType || !pricePerNight) {
            return res.json({ success: false, message: "Title, room type, and price are required" });
        }

        const uploadImages = req.files.map(async (file) => {
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })

        const images = await Promise.all(uploadImages)

        await Room.create({
            hotel: hotel._id,
            title,
            description: description || "",
            roomType,
            pricePerNight: +pricePerNight,
            amenities: JSON.parse(amenities),
            images,
        })

        res.json({ success: true, message: "Room created successfully" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const getRooms = async (req, res) => {
    try {
        const approvedHotels = await Hotel.find({
            $or: [{ status: "approved" }, { status: { $exists: false } }],
        }).select("_id");
        const approvedIds = approvedHotels.map((h) => h._id.toString());

        const rooms = await Room.find({
            isAvailable: true,
            hotel: { $in: approvedIds },
        }).populate({
            path: 'hotel',
            populate: {
                path: 'owner',
                select: 'image username'
            }
        })
            .sort({ createdAt: -1 });
        res.json({ success: true, rooms });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getOwnerRooms = async (req, res) => {
    try {
        const hotelData = await Hotel.findOne({ owner: req.user._id })
        if (!hotelData) {
            return res.json({ success: false, message: "No Hotel found" });
        }
        const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate("hotel")
        res.json({ success: true, rooms });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const toggleRoomAvailability = async (req, res) => {
    try {
        const { roomId } = req.body;
        const roomData = await Room.findById(roomId);
        if (!roomData) {
            return res.json({ success: false, message: "Room not found" });
        }
        roomData.isAvailable = !roomData.isAvailable;
        await roomData.save();
        res.json({ success: true, message: "Room availability Updated" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
