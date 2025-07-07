import { Router } from "express";
import { getRecalls } from "../controllers/scanner.controller";

const router = Router();
router.get("/recalls", getRecalls);

export default router;
