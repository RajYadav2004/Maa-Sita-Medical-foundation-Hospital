import mongoose from 'mongoose';

const settingsSchema = mongoose.Schema({
    hospitalName: {
        type: String,
        required: true,
        default: "Maa Sita Medical Foundation"
    },
    email: {
        type: String,
        required: true,
        default: "Maasitamedicalfoundation@msmfh.org"
    },
    phone: {
        type: String,
        required: true,
        default: "+91 90829 45603"
    },
    address: {
        type: String,
        required: true,
        default: "Madhubani, Bihar"
    },
    facebookUrl: { type: String, default: "" },
    twitterUrl: { type: String, default: "" },
    instagramUrl: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
}, {
    timestamps: true,
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;
