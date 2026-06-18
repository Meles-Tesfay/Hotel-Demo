import express from "express";
import protect, { requireAdmin } from "../middleware/authMiddleware.js";
import {
    approveOwner,
    getAllOwners,
    getPendingOwners,
    rejectOwner,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.use(protect, requireAdmin);

adminRouter.get("/pending", getPendingOwners);
adminRouter.get("/owners", getAllOwners);
adminRouter.patch("/approve/:ownerId", approveOwner);
adminRouter.patch("/reject/:ownerId", rejectOwner);

export default adminRouter;
