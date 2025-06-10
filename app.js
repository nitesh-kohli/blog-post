import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import _ from 'lodash';
import Post from './models/post.js';
import homeRouter from './routes/home.js';
import aboutRouter from './routes/about.js';
import contactRouter from './routes/contact.js';
import publishRouter from './routes/publish.js';
import composeRouter from './routes/compose.js';
import searchPostsRouter from './routes/searchPosts.js';


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//routes
app.use('/',homeRouter);
app.use('/about',aboutRouter);
app.use('/contact',contactRouter);
app.use('/publish',publishRouter);
app.use('/compose',composeRouter);
// app.use('/searchPosts',searchPostsRouter);


app.get('/posts/:postId', async (req, res) => {
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

app.listen(3000, function() {
  console.log("Server started at: http://localhost:3000");
});