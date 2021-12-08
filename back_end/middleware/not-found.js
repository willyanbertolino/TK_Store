const notFound = (_, res) => {
  res.status(404).send('Route does not exist');
};

module.exports = notFound;
