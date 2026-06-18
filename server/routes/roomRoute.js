import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import protect, { requireOwner } from "../middleware/authMiddleware.js";
import { createRoom, getOwnerRooms, getRooms, toggleRoomAvailability } from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post('/', upload.array("images", 4), protect, requireOwner, createRoom)
roomRouter.get('/', getRooms)
roomRouter.get('/owner', protect, requireOwner, getOwnerRooms)
roomRouter.post('/toggle-availability', protect, requireOwner, toggleRoomAvailability)

export default roomRouter;