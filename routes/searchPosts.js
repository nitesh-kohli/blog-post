import express from 'express';
import _ from 'lodash';
import Post from '../models/post.js';

const router = express.Router();

router.get('/posts/:postId', async (req, res) => {
  const requestedPostId = req.params.postId;

  try {
    const post = await Post.findOne({ _id: requestedPostId });

    if (post) {
      res.render('post', {
        title: post.title,
        content: post.content
      });
    } else {
      res.status(404).send('Post not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;
