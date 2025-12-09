import express from 'express';
import Settings from '../models/Settings.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get settings
// @route   GET /api/settings
// @access  Public
router.get('/', async (req, res) => {
    try {
        let settings = await Settings.findOne();
        if (!settings) {
            // Create default settings if not exists
            settings = await Settings.create({});
        }
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Update settings
// @route   PUT /api/settings
// @access  Private/Admin
router.put('/', protect, admin, async (req, res) => {
    try {
        let settings = await Settings.findOne();
        if (!settings) {
            settings = new Settings();
        }

        settings.hospitalName = req.body.hospitalName || settings.hospitalName;
        settings.email = req.body.email || settings.email;
        settings.phone = req.body.phone || settings.phone;
        settings.address = req.body.address || settings.address;
        settings.facebookUrl = req.body.facebookUrl || settings.facebookUrl;
        settings.twitterUrl = req.body.twitterUrl || settings.twitterUrl;
        settings.instagramUrl = req.body.instagramUrl || settings.instagramUrl;
        settings.linkedinUrl = req.body.linkedinUrl || settings.linkedinUrl;

        const updatedSettings = await settings.save();
        res.json(updatedSettings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
