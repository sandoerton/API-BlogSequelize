const categoryService = require('../services/categoryService');

// const findAll = async (_req, res) => {
//   const result = await categoryService.findAll();
//   return res.status(200).json(result);
// };

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const category = await categoryService.create({ name });
  return res.status(201).json(category);
};

module.exports = { create };
