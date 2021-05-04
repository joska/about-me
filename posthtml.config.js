module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        URL: process.env.URL
      }
    }
  }
};
