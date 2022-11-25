import express from "express";
import { DpConcernsController } from "../controllers/dpConcerns.js";
import { AlumniController } from "../controllers/dpAlumni.js";
import { authController } from "../controllers/authController.js";
import { EngineerController } from "../controllers/engineer.js";
import { middlewareController } from "../controllers/middlewareController.js";
import { upload } from '../middlewares/MulterMiddleWare.js'
import { RightMenuController } from '../controllers/RightMenuController.js'
import { DpRoadController } from "../controllers/dpRoad.js";
import { OurmainController } from "../controllers/dpOurmain.js";

const router = express.Router();
router.get("/api/dpalumni", AlumniController.get);
router.post("/api/dpalumni", upload.single('img'), AlumniController.create);
router.patch("/api/dpalumni/:_id", AlumniController.update);
router.delete("/api/dpalumni/:_id", AlumniController.delete);
router.get("/api/dpalumni/:_id", AlumniController.restore);

router.get("/api/dpconcerns", DpConcernsController.get);
router.post("/api/dpconcerns", upload.single('img'), DpConcernsController.create);
router.patch("/api/dpconcerns/:_id", DpConcernsController.update);
router.delete("/api/dpconcerns/:_id", DpConcernsController.delete);
router.get("/api/dpconcerns/:_id", DpConcernsController.restore);

router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);
router.post("/auth/logout",middlewareController.verifyToken, authController.userLogout);


router.get('/rightmenu', RightMenuController.show);
router.delete('/rightmenu/:id', RightMenuController.delete);
router.get('/rightmenu/:id', RightMenuController.showItem);
router.post('/rightmenu/:id',upload.single('img'), RightMenuController.update);
router.post('/rightmenu', upload.single('img'), RightMenuController.upload);

router.get("/api/engineer", middlewareController.verifyToken, EngineerController.get);
router.post("/api/engineer", upload.single('img'), EngineerController.create);
router.patch("/api/engineer/:_id", upload.single('img'), EngineerController.update);
router.delete("/api/engineer/:_id", EngineerController.delete);
router.get("/api/engineer/:_id", EngineerController.restore);

router.get("/api/dproads", DpRoadController.get);
router.post("/api/dproads", upload.single('img'), DpRoadController.create);
router.patch("/api/dproads/:_id", DpRoadController.update);
router.delete("/api/dproads/:_id", DpRoadController.delete);
router.get("/api/dproads/:_id", DpRoadController.restore);

router.get("/api/ourmain", OurmainController.get);
router.post("/api/ourmain", upload.single('img'), OurmainController.create);
router.patch("/api/ourmain/:_id", OurmainController.update);
router.delete("/api/ourmain/:_id", OurmainController.delete);
router.get("/api/ourmain/:_id", OurmainController.restore);

export default router;