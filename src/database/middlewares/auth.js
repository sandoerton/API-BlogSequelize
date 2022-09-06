const { tokenCheck } = require('../helpers/token');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    // console.log(dataToken);
    const dataToken = tokenCheck(authorization, JWT_SECRET);
    const user = await User.findOne({ where: { email: dataToken.email } });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;
