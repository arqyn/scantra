import { Router } from "express";
import { getRecalls } from "../controllers/scanner.controller";

const router = Router();
router.post("/recalls", getRecalls);

export default router;
