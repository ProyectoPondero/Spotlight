import { Router } from "express";
import { filesCtrl } from "../controller/file.controller.js";

export const filesRoutes = Router();

filesRoutes.post('/img', filesCtrl.uploadImg);