import express from "express"
import {authController} from "../controllers/authController.js";
import { middlewareController } from "../controllers/middlewareController.js";
import {upload}  from '../middlewares/MulterMiddleWare.js'
import {RightMenuController} from '../controllers/RightMenuController.js'
const router = express.Router();
router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);
router.post("/auth/logout",middlewareController.verifyToken, authController.userLogout);
router.get('/rightmenu', RightMenuController.show);
router.delete('/rightmenu', RightMenuController.delete);
router.put('/rightmenu', RightMenuController.update);
router.post('/rightmenu', upload.single('img'), RightMenuController.upload);

export default router;