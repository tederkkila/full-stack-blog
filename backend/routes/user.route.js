import express from "express";
import {getUserSavedPosts, savePost} from "../models/user.controller.js";

const router = express.Router();

router.get("/saved", getUserSavedPosts);
router.patch("/save", savePost);

export default router;