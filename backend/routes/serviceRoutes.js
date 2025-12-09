import express from 'express';
import Service from '../models/Service.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const services = await Service.find({});
    res.json(services);
});

router.post('/', protect, admin, async (req, res) => {
    const service = new Service(req.body);
    const createdService = await service.save();
    res.status(201).json(createdService);
});

router.put('/:id', protect, admin, async (req, res) => {
    const service = await Service.findById(req.params.id);
    if (service) {
        Object.assign(service, req.body);
        const updatedService = await service.save();
        res.json(updatedService);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
});

router.delete('/:id', protect, admin, async (req, res) => {
    const service = await Service.findById(req.params.id);
    if (service) {
        await service.deleteOne();
        res.json({ message: 'Service removed' });
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
});

export default router;
