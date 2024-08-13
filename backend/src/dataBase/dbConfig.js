import { Sequelize } from "sequelize";

// Conexion a la base de datos con Sequelize
export const sequelize = new Sequelize(
    'spotbeta',
    'root',
    '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Probando conexion
export const connectDB = async () => {
    try {
        await sequelize.sync();
        console.log('Conexión establecida con la base de datos');
    } catch (error) {
        console.error('No se a podido establecer la conección:', error);
    }
};