import express from "express"
import {authController} from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);
router.post("/auth/logout", authController.userLogout);

export default router;