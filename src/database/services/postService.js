const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, {
      model: Category, as: 'categories',
    }],
  });
  return result;
};

const findByPk = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, {
      model: Category, as: 'categories',
    }],
  });
  return result;
};

module.exports = { findAll, findByPk };
