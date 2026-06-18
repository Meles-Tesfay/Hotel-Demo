import mongoose from "mongoose";

const hospitalitySchema = new mongoose.Schema({
    hotel: { type: String, required: true, ref: "Hotel" },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    features: [{ type: String }],
    image: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

const Hospitality = mongoose.model("Hospitality", hospitalitySchema);

export default Hospitality;
