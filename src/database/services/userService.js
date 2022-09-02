const { User } = require('../models');

const findAll = async () => {
  const result = await User.findAll();
  return result;
};

module.exports = { findAll };
