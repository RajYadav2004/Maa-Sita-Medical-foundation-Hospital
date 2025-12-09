import mongoose from 'mongoose';
import dotenv from 'dotenv';
import GalleryItem from './models/GalleryItem.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/msmfhb')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const galleryItems = [
    {
        title: "Hospital Exterior View",
        type: "image",
        url: "/uploads/hospital-exterior-1.jpg"
    },
    {
        title: "Hospital Reception Area",
        type: "image",
        url: "/uploads/hospital-reception-1.jpg"
    },
    {
        title: "Hospital Cafe",
        type: "image",
        url: "/uploads/hospital-cafe.jpg"
    },
    {
        title: "Hospital Building",
        type: "image",
        url: "/uploads/hospital-exterior-2.jpg"
    },
    {
        title: "Waiting Area",
        type: "image",
        url: "/uploads/hospital-reception-2.jpg"
    },
    {
        title: "Hospital Interior 1",
        type: "image",
        url: "/uploads/gallery-new-0.jpg"
    },
    {
        title: "Hospital Interior 2",
        type: "image",
        url: "/uploads/gallery-new-1.jpg"
    },
    {
        title: "Hospital Interior 3",
        type: "image",
        url: "/uploads/gallery-new-2.jpg"
    },
    {
        title: "Hospital Interior 4",
        type: "image",
        url: "/uploads/gallery-new-3.jpg"
    },
    {
        title: "Hospital Interior 5",
        type: "image",
        url: "/uploads/gallery-new-4.jpg"
    }
];

const seedGallery = async () => {
    try {
        await GalleryItem.deleteMany({}); // Clear existing items
        await GalleryItem.insertMany(galleryItems);
        console.log('Gallery items seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding gallery:', error);
        process.exit(1);
    }
};

seedGallery();
