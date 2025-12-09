import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    department: { type: String, required: true },
    image: { type: String },
    experience: { type: String },
    qualification: { type: String },
    languages: { type: [String], default: [] },
    about: { type: String },
    expertise: { type: [String], default: [] },
    availability: { type: String },
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
