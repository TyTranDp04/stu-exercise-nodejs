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
router.get("/dpalumni", AlumniController.show);
router.post("/dpalumni", upload.single('img'), AlumniController.upload);
router.get("/dpalumni/:id", AlumniController.showItem);
router.post("/dpalumni/:id", upload.single('img'), AlumniController.update);
router.delete("/dpalumni/:id", AlumniController.delete);

router.get("/dpconcerns", DpConcernsController.get);
router.post("/dpconcerns", upload.single('img'), DpConcernsController.create);
router.post("/dpconcerns/:id",upload.single('img'), DpConcernsController.update);
router.delete("/dpconcerns/:id", DpConcernsController.delete);
router.get("/dpconcerns/:id", DpConcernsController.showItem);

router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);
router.post("/auth/logout",middlewareController.verifyToken, authController.userLogout);


router.get('/rightmenu', RightMenuController.show);
router.delete('/rightmenu/:id', RightMenuController.delete);
router.get('/rightmenu/:id', RightMenuController.showItem);
router.post('/rightmenu/:id',upload.single('img'), RightMenuController.update);
router.post('/rightmenu', upload.single('img'), RightMenuController.upload);

router.get("/engineer",  EngineerController.get);
router.post("/engineer", upload.single('img'), EngineerController.create);
router.get('/engineer/:id', EngineerController.showItem);
router.post("/engineer/:id", upload.single('img'), EngineerController.update);
router.delete("/engineer/:id", EngineerController.delete);


router.get("/dproads", DpRoadController.get);
router.get("/dproads/:id", DpRoadController.showItem);
router.post("/dproads",upload.single('img'), DpRoadController.create);
router.post("/dproads/:_id", upload.single('img'), DpRoadController.update);
router.delete("/dproads/:_id", DpRoadController.delete);


router.get("/ourmain", OurmainController.get);
router.post("/ourmain", upload.single('img'), OurmainController.create);
router.get('/ourmain/:id', OurmainController.showItem);
router.post("/ourmain/:id", upload.single('img'), OurmainController.update); 
router.delete("/ourmain/:_id", OurmainController.delete);

export default router;