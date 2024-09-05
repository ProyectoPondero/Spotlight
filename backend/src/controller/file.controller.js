import { uploadFile } from "../utils/cloudinary.utils.js";

// Controlador para manejar las operaciones de subida de imágenes
export const filesCtrl = {};

// Implementar la función uploadImg que maneja la subida de imágenes
filesCtrl.uploadImg = async (req, res) => {
    try {
        // Obtener el archivo del objeto req
        const file = await req.files;

        if (req.files?.file) {
            const result = await uploadFile(req.files.file.tempFilePath);
            console.log(result);
        }

        // Imprimir la información del archivo en la consola
        console.log('Información del archivo:', file);

        // Enviar una respuesta de éxito al cliente
        res.status(200).send({ message: 'Archivo subido exitosamente.', file });
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        console.error('Error al subir el archivo:', error);
        res.status(500).send({ message: 'Error al subir el archivo.', error });
    }
};