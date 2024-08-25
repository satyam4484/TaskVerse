import { Router } from "express";
import { createUser, getUserById, updateUserById, deleteUserById } from "../controllers/user.controller.js"

const router = Router();

// Create a new user
router.post("/", createUser);

// Get a user by ID
router.get("/:id", getUserById);

// Update a user by ID
router.put("/:id", updateUserById);

// Delete a user by ID
router.delete("/:id", deleteUserById);

export default router;