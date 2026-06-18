import mongoose from "mongoose";

const hospitalityOrderSchema = new mongoose.Schema({
    user: { type: String, ref: "User", required: true },
    hospitality: { type: String, ref: "Hospitality", required: true },
    hotel: { type: String, ref: "Hotel", required: true },
    totalPrice: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
    },
    paymentMethod: {
        type: String,
        default: "Pay At Hotel",
    },
    isPaid: { type: Boolean, default: false },
    serviceDate: { type: Date, default: Date.now },
}, { timestamps: true });

const HospitalityOrder = mongoose.model("HospitalityOrder", hospitalityOrderSchema);

export default HospitalityOrder;
