import { v2 as cloudinary } from 'cloudinary';
import { API_KEY, API_SECRET, CLOUD_NAME } from '../configs/env.config.js';

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true
});

export async function uploadFile(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Spotlight'
    });
};