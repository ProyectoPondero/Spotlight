import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { authRoutes } from './router/auth.routes.js';
import { connectDB } from "./dataBase/dbConfig.js";
import { filesRoutes } from './router/file.routes.js';

// Inicializacion
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './temp'
}));

// Ruras
app.use('/api/user', authRoutes);
app.use('/upload', filesRoutes);

// Server
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT} 🚀`);
});