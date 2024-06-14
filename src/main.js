import express from 'express';
import router from './routes/registro.routes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/auth', router);

// Ruta para escuchar el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});