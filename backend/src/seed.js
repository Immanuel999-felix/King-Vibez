/*
Run this script once to create an admin user and a sample track.
Usage:
  node src/seed.js
Make sure MONGO_URI and JWT_SECRET are set in .env
*/
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Track = require('./models/Track');

async function run(){
  await mongoose.connect(process.env.MONGO_URI);
  console.log('connected');
  const exists = await User.findOne({ email: 'admin@kingvibez.com' });
  if(!exists){
    const passwordHash = await bcrypt.hash('password123', 10);
    await User.create({ name: 'Admin', email: 'admin@kingvibez.com', passwordHash, role: 'admin' });
    console.log('Admin created: admin@kingvibez.com (password123)');
  } else {
    console.log('Admin already exists');
  }

  const t = await Track.findOne({ title: 'Sample Track' });
  if(!t){
    await Track.create({
      title: 'Sample Track',
      description: 'This is a sample track.',
      audioUrl: '',
      coverImageUrl: '',
      releaseDate: new Date()
    });
    console.log('Sample track created');
  } else {
    console.log('Sample track already exists');
  }
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
