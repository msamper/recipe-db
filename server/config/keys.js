const config = {
  // Enter your mLab URI here to use a remote DB
  mongoURL: process.env.MONGO_URL || 'mongodb://testy:testy123@ds053774.mlab.com:53774/personalrecipedb',
  port: process.env.PORT || 8000,
  secretOrKey: 'tasmanianDevil',
};

export default config;
