const mongoose = require('mongoose');
const TrackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  audioUrl: String,
  coverImageUrl: String,
  releaseDate: Date,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Track', TrackSchema);
