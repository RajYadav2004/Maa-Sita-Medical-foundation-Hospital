import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');

        const email = 'ry191111989@gmail.com';
        const password = '191111989';

        const userExists = await User.findOne({ email });

        if (userExists) {
            userExists.role = 'admin';
            userExists.password = password; // Update password to match request
            await userExists.save();
            console.log('User updated to admin with provided password');
        } else {
            const user = await User.create({
                email,
                password,
                role: 'admin',
            });
            console.log('Admin user created');
        }

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

createAdmin();
