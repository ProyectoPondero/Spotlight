import { validationResult } from "express-validator";

export const validatorError = (req, res, next) =>{
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores);
    }
    next();  // Si no hay errores, pasamos al controlador siguiente
}