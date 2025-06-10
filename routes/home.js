import express from 'express';
const router = express.Router();
import mongoose from'mongoose';
import Post from '../models/post.js';

mongoose.connect("mongodb+srv://niteshkoli:test123@cluster0.dsilpre.mongodb.net/blogPostDB", {useNewUrlParser: true});

let posts = [];

const homeStartingContent = `Capture your day, one journal at a time.
Pen down your thoughts, reflect on your journey, and grow with every entry.`;

router.get("/", (req, res) => {
  Post.find({})
    .then((posts) => {
      res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
        });
    })
    .catch(function(err){
      console.log(err);
    });
});

export default router;