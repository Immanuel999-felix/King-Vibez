const router = require('express').Router();
const Track = require('../models/Track');
const auth = require('../middleware/auth');

// list tracks
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find().sort({ releaseDate: -1 });
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// create track (protected)
router.post('/', auth, async (req, res) => {
  try {
    // in production, check req.user.role === 'admin'
    const data = req.body;
    const track = await Track.create(data);
    res.json(track);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router;
