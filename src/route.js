const express = require("express");
const bodyParser = require("body-parser");
const { getData, saveData } = require("./controllers/data");
const { login } = require("./controllers/user");
const auth = require("./middleware/auth");
const Validator = require("./middleware/validator");

const router = express.Router();
router.use(bodyParser.json());

router.post("/save", auth, Validator("save"), async (req, res) => {
  try {
    await saveData(req.body);
    res.json({ result: "Saved successfully!" });
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/read", auth, Validator("read"), async (req, res) => {
  try {
    const data = await getData(req.query.id);
    res.json(data);
  } catch (err) {
    res.status(404);
    res.send(err.message);
  }
});

router.post("/login", Validator("login"), async (req, res) => {
  try {
    const token = await login(req.body);
    res.json(token);
  } catch (err) {
    res.status(400);
    res.send(err.message);
  }
});

module.exports = router;
