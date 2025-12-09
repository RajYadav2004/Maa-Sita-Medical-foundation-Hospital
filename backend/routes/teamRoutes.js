import express from 'express';
import TeamMember from '../models/TeamMember.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
    destination(req, file, cb) {
        const uploadPath = path.join(process.cwd(), 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|webp/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Images only!'));
        }
    },
});

// @desc    Get all team members
// @route   GET /api/team
// @access  Public
router.get('/', async (req, res) => {
    try {
        const team = await TeamMember.find({}).sort({ order: 1, createdAt: -1 });
        res.json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get single team member
// @route   GET /api/team/:id
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const member = await TeamMember.findById(req.params.id);
        if (member) {
            res.json(member);
        } else {
            res.status(404).json({ message: 'Team member not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create a team member
// @route   POST /api/team
// @access  Private/Admin
router.post('/', protect, admin, upload.single('image'), async (req, res) => {
    try {
        const { name, role, bio, linkedin, twitter, facebook, order } = req.body;
        let image = req.body.image; // Handle URL if provided directly

        if (req.file) {
            image = `/uploads/${req.file.filename}`;
        }

        const member = new TeamMember({
            name,
            role,
            image,
            bio,
            socialLinks: {
                linkedin,
                twitter,
                facebook
            },
            order: order ? Number(order) : 0
        });

        const createdMember = await member.save();
        res.status(201).json(createdMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc    Update a team member
// @route   PUT /api/team/:id
// @access  Private/Admin
router.put('/:id', protect, admin, upload.single('image'), async (req, res) => {
    try {
        const { name, role, bio, linkedin, twitter, facebook, order } = req.body;
        const member = await TeamMember.findById(req.params.id);

        if (member) {
            member.name = name || member.name;
            member.role = role || member.role;
            member.bio = bio || member.bio;
            member.order = order !== undefined ? Number(order) : member.order;

            if (linkedin !== undefined) member.socialLinks.linkedin = linkedin;
            if (twitter !== undefined) member.socialLinks.twitter = twitter;
            if (facebook !== undefined) member.socialLinks.facebook = facebook;

            if (req.file) {
                // Delete old image if it exists and is a local file
                if (member.image && member.image.startsWith('/uploads/')) {
                    const oldImagePath = path.join(process.cwd(), member.image);
                    if (fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath);
                    }
                }
                member.image = `/uploads/${req.file.filename}`;
            } else if (req.body.image) {
                member.image = req.body.image;
            }

            const updatedMember = await member.save();
            res.json(updatedMember);
        } else {
            res.status(404).json({ message: 'Team member not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc    Delete a team member
// @route   DELETE /api/team/:id
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const member = await TeamMember.findById(req.params.id);

        if (member) {
            if (member.image && member.image.startsWith('/uploads/')) {
                const imagePath = path.join(process.cwd(), member.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }
            await member.deleteOne();
            res.json({ message: 'Team member removed' });
        } else {
            res.status(404).json({ message: 'Team member not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
