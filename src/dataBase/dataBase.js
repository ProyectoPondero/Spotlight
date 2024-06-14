import { createConnection } from 'mysql2/promise';

// Función para crear una nueva conexión a la base de datos
export const newConnection = async () => {
  try {
    const connection = await createConnection({
      host: "localhost", // IP del servidor donde se aloja la bd
      user: "root",
      database: "spotbeta" // El nombre de la base de datos
    })
    if (!connection) throw new Error('Error al conectar con la base de datos')
    return connection

  } catch (error) {
    console.error('Error al conectar con la base de datos', error)
  }
}