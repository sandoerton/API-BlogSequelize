const { tokenGenerate } = require('../helpers/token');
const userService = require('../services/userService');

const findAll = async (_req, res) => {
  const result = await userService.findAll();
  res.status(200).json(result);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.findUser({ email, password });
  if (user) return res.status(409).json({ message: 'User already registered' });
  await userService.create({ displayName, email, password, image });
  const token = tokenGenerate({ email });
  return res.status(201).json({ token });
};

module.exports = { findAll, create };
