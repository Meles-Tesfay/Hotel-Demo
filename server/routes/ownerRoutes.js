import express from "express";
import protect, { requireHotelOwnerRole } from "../middleware/authMiddleware.js";
import { getOwnerProfile, updateOwnerProfile } from "../controllers/ownerController.js";

const ownerRouter = express.Router();

ownerRouter.get("/profile", protect, requireHotelOwnerRole, getOwnerProfile);
ownerRouter.put("/profile", protect, requireHotelOwnerRole, updateOwnerProfile);

export default ownerRouter;
