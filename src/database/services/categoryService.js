const { Category } = require('../models');

const findAll = async () => {
  const result = await Category.findAll({ attributes: { exclude: ['password'] } });
  return result;
};

const create = async (name) => Category.create(name);

module.exports = { findAll, create };
