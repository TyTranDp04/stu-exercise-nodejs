import express from "express";
import { DpAlumniController } from "../controllers/dpalumni.js";

const router = express.Router();

router.get("/api/dpalumni", DpAlumniController.get);
router.post("/api/dpalumni", DpAlumniController.create);
router.patch("/api/dpalumni/:_id", DpAlumniController.update);
router.delete("/api/dpalumni/:_id", DpAlumniController.delete);
router.get("/api/dpalumni/:_id", DpAlumniController.restore);

export default router;