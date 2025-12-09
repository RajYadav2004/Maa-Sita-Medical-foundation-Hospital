import mongoose from 'mongoose';

const galleryItemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['image', 'video'],
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    public_id: {
        type: String, // For future use if using Cloudinary, or just filename for local
    }
}, {
    timestamps: true,
});

const GalleryItem = mongoose.model('GalleryItem', galleryItemSchema);

export default GalleryItem;
