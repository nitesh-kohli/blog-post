import Router  from 'express';
const router = Router();
import Post from '../models/post.js';
import mongoose from'mongoose';


mongoose.connect("mongodb+srv://niteshkoli:test123@cluster0.dsilpre.mongodb.net/blogPostDB", {useNewUrlParser: true});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  try{
    await post.save();
    res.redirect("/");
  }
  catch (err) {
    console.error("Error saving post:", err);
    res.status(500).send("Something went wrong.");
  }
});


export default router;