import express from 'express';
import Doctor from '../models/Doctor.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Fetch all doctors
// @route   GET /api/doctors
// @access  Public
router.get('/', async (req, res) => {
    const doctors = await Doctor.find({});
    res.json(doctors);
});

// @desc    Fetch single doctor
// @route   GET /api/doctors/:id
// @access  Public
router.get('/:id', async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ message: 'Doctor not found' });
    }
});

// @desc    Create a doctor
// @route   POST /api/doctors
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
    const doctor = new Doctor(req.body);
    const createdDoctor = await doctor.save();
    res.status(201).json(createdDoctor);
});

// @desc    Update a doctor
// @route   PUT /api/doctors/:id
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);

    if (doctor) {
        Object.assign(doctor, req.body);
        const updatedDoctor = await doctor.save();
        res.json(updatedDoctor);
    } else {
        res.status(404).json({ message: 'Doctor not found' });
    }
});

// @desc    Delete a doctor
// @route   DELETE /api/doctors/:id
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);

    if (doctor) {
        await doctor.deleteOne();
        res.json({ message: 'Doctor removed' });
    } else {
        res.status(404).json({ message: 'Doctor not found' });
    }
});

export default router;
