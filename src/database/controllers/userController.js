const userService = require('../services/userService');

const findAll = async (_req, res) => {
  const result = await userService.findAll();
  res.status(200).json(result);
};

module.exports = { findAll };
