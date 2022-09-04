const Joi = require('joi');

const regexEmail = /\S+@\S+\.\S+/;
const STRING_MIN = '{#label} length must be at least {#limit} characters long';

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': STRING_MIN,
  }),
  // email: Joi.string().email().require().message({
  //   'string.email': '"email" must be a valid email',
  // }),
  password: Joi.string().min(6).required().messages({
    'string.min': STRING_MIN,
  }),
});

function validateUser(req, res, next) {
  const user = req.body;
  const { error } = userSchema.validate(user);
  if (user.displayName.length < 8) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // if (!user.email.contain('@')) {
  //   return res.status(400).json({ message: error.details[0].message });
  // } Não consegui fazer funcionar

  if (!regexEmail.test(user.email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (user.password.length < 6) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
}

module.exports = validateUser;
