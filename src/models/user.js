const db = require("../db");
const userModel = db.collection("users");

const createUser = async (data) => {
  await userModel.doc("user").set(data);
};

const getUser = async (data) => {
  const users = [];
  await userModel
    .where("userName", "==", data.userName)
    .where("password", "==", data.password)
    .get()
    .then((querySnaphot) => {
      querySnaphot.forEach((doc) => users.push(doc.data()));
    });
  return users[0];
};
module.exports = { createUser, getUser };
