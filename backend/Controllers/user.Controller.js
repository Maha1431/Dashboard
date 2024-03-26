const userService = require('../Service/user.service');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await userService.connectAndFetchData();
      res.json(users[0]);
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: err.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const newUser = req.body; // Assuming request body contains user data
      const createdUser = await userService.createUser(newUser);
      res.status(201).json(createdUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id; // Assuming the user ID is passed as a route parameter
      const updatedUserData = req.body; // Assuming request body contains updated user data
      const updatedUser = await userService.updateUser(userId, updatedUserData);
      res.json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id; // Assuming the user ID is passed as a route parameter
      await userService.deleteUser(userId);
      res.status(204).end();
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  }
};
