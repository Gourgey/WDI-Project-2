const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/japanese-dishes';

module.exports = {
  port,
  dbUri
};
