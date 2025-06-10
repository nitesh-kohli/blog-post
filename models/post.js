import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);