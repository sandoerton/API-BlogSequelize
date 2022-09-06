const { User } = require('../models');

const findAll = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  return result;
};

const findByPk = async (id) => {
  const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return result;
};

const findUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password }, raw: true });
  if (!user) return null;
  return user;
};

const create = async ({ displayName, email, password, image }) => {
  const result = await User.create({ displayName, email, password, image });
  return result.dataValues;
};

module.exports = { findAll, findByPk, findUser, create };
