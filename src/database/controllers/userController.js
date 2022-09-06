const { tokenGenerate } = require('../helpers/token');
const userService = require('../services/userService');

const findAll = async (_req, res) => {
  const result = await userService.findAll();
  return res.status(200).json(result);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const row = await userService.findByPk(id);
  if (!row) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(row);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.findUser({ email, password });
  if (user) return res.status(409).json({ message: 'User already registered' });
  await userService.create({ displayName, email, password, image });
  const token = tokenGenerate({ email });
  return res.status(201).json({ token });
};

module.exports = { findAll, findByPk, create };
