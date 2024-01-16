import express from "express";
const router = express.Router();
import { registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddlware.js";

router.post("/register", registerUser);

export default router;
