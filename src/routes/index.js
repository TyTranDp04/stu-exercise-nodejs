import express from "express";
import { DpConcernsController } from "../controllers/dpConcerns.js";
import { DpAlumniController } from "../controllers/dpalumni.js";
import {authController} from "../controllers/authController.js";
import { middlewareController } from "../controllers/middlewareController.js";
import {upload}  from '../middlewares/MulterMiddleWare.js'
import {RightMenuController} from '../controllers/RightMenuController.js'
import { DpRoadController } from "../controllers/dpRoad.js";

const router = express.Router();
router.get("/api/dpalumni", DpAlumniController.get);
router.post("/api/dpalumni", DpAlumniController.create);
router.patch("/api/dpalumni/:_id", DpAlumniController.update);
router.delete("/api/dpalumni/:_id", DpAlumniController.delete);
router.get("/api/dpalumni/:_id", DpAlumniController.restore);

router.get("/api/dpconcerns", DpConcernsController.get);
router.post("/api/dpconcerns",upload.single('img'), DpConcernsController.create);
router.patch("/api/dpconcerns/:_id", DpConcernsController.update);
router.delete("/api/dpconcerns/:_id", DpConcernsController.delete);
router.get("/api/dpconcerns/:_id", DpConcernsController.restore);

router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);
router.post("/auth/logout",middlewareController.verifyToken, authController.userLogout);
router.get('/rightmenu', RightMenuController.show);
router.delete('/rightmenu', RightMenuController.delete);
router.put('/rightmenu', RightMenuController.update);
router.post('/rightmenu', upload.single('img'), RightMenuController.upload);

router.get("/api/dproads", DpRoadController.get);
router.post("/api/dproads", upload.single('img'), DpRoadController.create);
router.patch("/api/dproads/:_id", DpRoadController.update);
router.delete("/api/dproads/:_id", DpRoadController.delete);
router.get("/api/dproads/:_id", DpRoadController.restore);

export default router;