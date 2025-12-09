import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String },
    content: { type: String },
    author: { type: String },
    category: { type: String },
    image: { type: String },
    read_time: { type: String },
    published_at: { type: Date },
}, { timestamps: true });

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
export default BlogPost;
