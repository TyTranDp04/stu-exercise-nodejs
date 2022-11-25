import express from "express";
import { DpConcernsController } from "../controllers/dpConcerns.js";
import { AlumniController } from "../controllers/dpalumniController.js";
import { authController } from "../controllers/authController.js";
import { EngineerController } from "../controllers/engineerController.js";
import { middlewareController } from "../middlewares/middlewareController.js";
import { upload } from '../middlewares/MulterMiddleWare.js';
import { RightMenuController } from '../controllers/RightMenuController.js';
import { DpRoadController } from "../controllers/dpRoad.js";
import { OurmainController } from "../controllers/dpOurmainController.js";

const router = express.Router();
router.get("/api/dpalumni", AlumniController.get);
router.post("/api/dpalumni", upload.single('img'), AlumniController.create);
router.get("/api/dpalumni/:id", AlumniController.showItem);
router.patch("/api/dpalumni/:id", upload.single('img'), AlumniController.update);
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

router.get("/api/engineer",  EngineerController.get);
router.post("/api/engineer", upload.single('img'), EngineerController.create);
router.get('/api/engineer/:id', EngineerController.showItem);
router.patch("/api/engineer/:id", upload.single('img'), EngineerController.update);
router.delete("/api/engineer/:_id", EngineerController.delete);
router.get("/api/engineer/:_id", EngineerController.restore);

router.get("/api/dproads", DpRoadController.get);
router.post("/api/dproads", upload.single('img'), DpRoadController.create);
router.patch("/api/dproads/:_id", DpRoadController.update);
router.delete("/api/dproads/:_id", DpRoadController.delete);
router.get("/api/dproads/:_id", DpRoadController.restore);

router.get("/api/ourmain", OurmainController.get);
router.post("/api/ourmain", upload.single('img'), OurmainController.create);
router.get('/api/ourmain/:id', OurmainController.showItem);
router.patch("/api/ourmain/:id", upload.single('img'), OurmainController.update);
router.delete("/api/ourmain/:_id", OurmainController.delete);
router.get("/api/ourmain/:_id", OurmainController.restore);

export default router;