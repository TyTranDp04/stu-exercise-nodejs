import express from "express";
import { DpConcernsController } from "../controllers/dpConcerns.js";

const router = express.Router();

router.get("/api/dpconcerns", DpConcernsController.get);
router.post("/api/dpconcerns", DpConcernsController.create);
router.patch("/api/dpconcerns/:_id", DpConcernsController.update);
router.delete("/api/dpconcerns/:_id", DpConcernsController.delete);
router.get("/api/dpconcerns/:_id", DpConcernsController.restore);

export default router;