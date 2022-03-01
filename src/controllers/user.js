const jwt = require("jsonwebtoken");

const userModel = require("../models/user");

const login = async (data) => {
  const user = await userModel.getUser(data);
  console.log(user);
  if (!user) throw new Error("User not found!");

  const { userName, password } = user;
  const token = jwt.sign(
    {
      userName,
      password,
    },
    process.env.JWT_KEY,
    { expiresIn: "2h" }
  );

  return token;
};
module.exports = { login };
