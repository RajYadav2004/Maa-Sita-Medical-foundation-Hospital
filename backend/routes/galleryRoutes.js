import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import GalleryItem from '../models/GalleryItem.js';
import { protect, admin } from '../middleware/authMiddleware.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure Multer for file upload
const storage = multer.diskStorage({
    destination(req, file, cb) {
        const uploadPath = path.join(__dirname, '../uploads');
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png|mp4|mov|avi/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Images and Videos only!');
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});

// Custom upload middleware to handle errors
const uploadMiddleware = (req, res, next) => {
    console.log('Starting file upload middleware...');
    upload.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            console.error('Multer error:', err);
            return res.status(400).json({ message: `Upload error: ${err.message}` });
        } else if (err) {
            console.error('Unknown upload error:', err);
            return res.status(400).json({ message: err });
        }
        console.log('File upload middleware completed successfully.');
        if (req.file) {
            console.log('File received:', req.file);
        } else {
            console.log('No file received in middleware.');
        }
        next();
    });
};

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
router.get('/', async (req, res) => {
    try {
        const items = await GalleryItem.find({}).sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Upload a gallery item
// @route   POST /api/gallery
// @access  Private/Admin
router.post('/', protect, admin, uploadMiddleware, async (req, res) => {
    console.log('POST /api/gallery handler started');
    console.log('Request Body:', req.body);
    try {
        const { title, type, url: bodyUrl } = req.body;
        const file = req.file;

        let finalUrl;

        if (file) {
            finalUrl = `/uploads/${file.filename}`;
            console.log('Using uploaded file path:', finalUrl);
        } else if (bodyUrl) {
            finalUrl = bodyUrl;
            console.log('Using external URL:', finalUrl);
        } else {
            console.error('No file or URL provided');
            return res.status(400).json({ message: 'Please upload a file or provide a URL' });
        }

        const galleryItem = new GalleryItem({
            title,
            type,
            url: finalUrl,
        });

        const createdItem = await galleryItem.save();
        console.log('Gallery item saved:', createdItem);
        res.status(201).json(createdItem);
    } catch (error) {
        console.error('Error saving gallery item:', error);
        res.status(500).json({ message: error.message });
    }
});

// @desc    Delete a gallery item
// @route   DELETE /api/gallery/:id
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const item = await GalleryItem.findById(req.params.id);

        if (item) {
            // Delete file from filesystem
            const filePath = path.join(__dirname, '../', item.url);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }

            await item.deleteOne();
            res.json({ message: 'Item removed' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
