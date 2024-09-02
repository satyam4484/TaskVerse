import { Router } from "express";
import { createUser, getUser, updateUserById, deleteUserById } from "../controllers/user.controller.js"
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

// Create a new user
router.post("/", createUser);

// Get a user by ID
router.get("/",verifyToken, getUser);

// Update a user by ID
router.put("/:id", updateUserById);

// Delete a user by ID
router.delete("/:id", deleteUserById);

export default router;