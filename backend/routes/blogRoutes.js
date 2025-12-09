import express from 'express';
import BlogPost from '../models/BlogPost.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await BlogPost.find({});
    res.json(posts);
});

router.get('/:id', async (req, res) => {
    const post = await BlogPost.findById(req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

router.post('/', protect, admin, async (req, res) => {
    const post = new BlogPost(req.body);
    const createdPost = await post.save();
    res.status(201).json(createdPost);
});

router.put('/:id', protect, admin, async (req, res) => {
    const post = await BlogPost.findById(req.params.id);
    if (post) {
        Object.assign(post, req.body);
        const updatedPost = await post.save();
        res.json(updatedPost);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

router.delete('/:id', protect, admin, async (req, res) => {
    const post = await BlogPost.findById(req.params.id);
    if (post) {
        await post.deleteOne();
        res.json({ message: 'Post removed' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

export default router;
