import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String },
    bio: { type: String },
    socialLinks: {
        linkedin: { type: String },
        twitter: { type: String },
        facebook: { type: String }
    },
    order: { type: Number, default: 0 }
}, { timestamps: true });

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);
export default TeamMember;
