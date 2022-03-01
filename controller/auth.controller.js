const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

module.exports = {
  signup: async (req, res) => {
    try {
      const user = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.password, salt);

      await user.save();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
