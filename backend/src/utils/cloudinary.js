/*
  Placeholder Cloudinary helper.
  In production, use cloudinary.v2.uploader.upload(...) with secure config.
*/
module.exports = {
  upload: async (buffer, filename) => {
    // Return a dummy url for now; replace with real upload logic.
    return { url: `https://res.cloudinary.com/demo/image/upload/${filename}` };
  }
};
