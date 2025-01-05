import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getComanyById, getCompany, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router=express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getComanyById)
router.route("/update/:id").put(isAuthenticated,updateCompany);

export default router;