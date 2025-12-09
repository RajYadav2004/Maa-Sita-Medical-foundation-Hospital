import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    patient_name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    preferred_date: { type: Date, required: true },
    preferred_time: { type: String, required: true },
    department: { type: String },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    message: { type: String },
    status: { type: String, default: 'pending' },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
