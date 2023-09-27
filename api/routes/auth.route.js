import express from "express";
import {register,login,logout} from "../controllers/auth.controller"
const router = express.Router();

router.post("/register",register);
router.post("/register",login);
router.post("/logout",logout);

export default router;