const { User } = require('../models');
const { tokenGenerate } = require('../helpers/token');

const create = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password }, raw: true });
  if (!user) return null;
  const token = tokenGenerate({ email });
  return token;
};

module.exports = { create };
