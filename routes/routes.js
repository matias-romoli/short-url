import { url } from "../controllers/controllers.js";
import express from "express";

//routes
export const router = express.Router();
router.post("/url", url.post);
router.get("/:url", url.get);
