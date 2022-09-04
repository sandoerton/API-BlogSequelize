const { tokenGenerate } = require('../helpers/token');
const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await userService.findUser({ email, password });
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  const token = tokenGenerate({ email });
  return res.status(200).json({ token });
};

module.exports = { login };
