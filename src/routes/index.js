import express from "express"
import {authController} from "../controllers/authController.js";
import { EngineerController } from "../controllers/engineer.js";

const router = express.Router();

router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);
router.post("/auth/logout", authController.userLogout);

router.get("/api/engineer", EngineerController.get);
router.post("/api/engineer", EngineerController.create);
router.patch("/api/engineer/:_id", EngineerController.update);
router.delete("/api/engineer/:_id", EngineerController.delete);
router.get("/api/engineer/:_id", EngineerController.restore);

export default router;