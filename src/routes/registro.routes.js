import { Router } from 'express';
import { newConnection } from '../dataBase/dataBase.js';

const router = Router();

router.post('/register', async (req, res) => {
    const connection = await newConnection();
    const { usuario, email, contraseña } = req.body;
    const newUser = await connection.query('INSERT INTO reg_usuarios (usuario, email, contraseña) values (?,?,?)', [usuario, email, contraseña]);
    if (newUser[0].affectedRows === 0) return res.status(400).json({ message: 'No se pudo registrar el usuario' });
    connection.end();
    return res.status(200).json({ usuario, email });
});

// router.get('/', (req, res) => {
//     res.send('Obtener registro');
// });

// router.put('/', (req, res) => {
//     res.send('Modficar registro');
// });

// router.delete('/', (req, res) => {
//     res.send('Eliminar registro');
// });

export default router;