const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    res.status(403).send("A token is required");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.user = decodedToken;
  } catch (err) {
    res.status(401);
    return res.send("Invalid token!");
  }
  return next();
};

module.exports = verifyToken;
