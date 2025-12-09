import express from 'express';
import Appointment from '../models/Appointment.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public: Create appointment
router.post('/', async (req, res) => {
    const appointment = new Appointment(req.body);
    const createdAppointment = await appointment.save();
    res.status(201).json(createdAppointment);
});

// Admin: Get all appointments
router.get('/', protect, admin, async (req, res) => {
    const appointments = await Appointment.find({}).populate('doctor_id', 'name');
    res.json(appointments);
});

// Admin: Update appointment status
router.put('/:id', protect, admin, async (req, res) => {
    const appointment = await Appointment.findById(req.params.id);
    if (appointment) {
        appointment.status = req.body.status || appointment.status;
        const updatedAppointment = await appointment.save();
        res.json(updatedAppointment);
    } else {
        res.status(404).json({ message: 'Appointment not found' });
    }
});

// Admin: Delete appointment
router.delete('/:id', protect, admin, async (req, res) => {
    const appointment = await Appointment.findById(req.params.id);
    if (appointment) {
        await appointment.deleteOne();
        res.json({ message: 'Appointment removed' });
    } else {
        res.status(404).json({ message: 'Appointment not found' });
    }
});

export default router;
