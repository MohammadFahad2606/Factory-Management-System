import express from "express";
import { getProducts, addProduct } from "../controllers/inventoryController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect these routes if needed
router.get("/", protect, getProducts);
router.post("/", protect, addProduct);

export default router;
