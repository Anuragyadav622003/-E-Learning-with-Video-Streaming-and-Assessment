// routes/userRoutes.js
import express from 'express';
import { loginUser, registerUser } from '../controllers/UserController.js';



const router = express.Router();

// Register route
router.post('/register',registerUser);

// Login route
router.post('/login',loginUser);

export default router;
