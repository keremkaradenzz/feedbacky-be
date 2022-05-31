import express from "express";
import { getFeedbacks, postFeedback } from "../controllers/feedback.js";
const router = express.Router();

router.get("/", getFeedbacks);
router.post("/", postFeedback);

export default router;
