import { Router } from 'express';
import { authCtrl } from '../controller/auth.controller.js';

// Inicializacion
export const authRoutes = Router();

// Rutas
authRoutes.post('/register', authCtrl.register);
authRoutes.post('/login', authCtrl.login);