const User = require("./user_model");

const creatUsers = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { address, phone, country, state } = req.body;

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { address, phone, country, state },
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUsers = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Delete");
  } catch (error) {
    res.status(500).json(error);
  }
};
const getUsers = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Users not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserId = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      res.status(200).json({
        user,
      });
    } else {
      const newUser = new User(req.body);
      const saveUser = await newUser.save({ name, email });
      res.status(200).json({ user: saveUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  creatUsers,
  updateUser,
  deleteUsers,
  getUsers,
  getAllUsers,
  getUserId,
};
