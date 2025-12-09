import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    features: { type: [String], default: [] },
    image: { type: String },
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
export default Service;
