const postService = require('../services/postService');

const findAll = async (_req, res) => {
  const result = await postService.findAll();
  return res.status(200).json(result);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const result = await postService.findByPk(id);
  if (!result) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(result);
};

module.exports = { findAll, findByPk };
