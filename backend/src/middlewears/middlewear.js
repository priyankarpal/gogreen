const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(404).json({ message: "User not Authenticated" });
  }

  try {
    const verify = await jwt.verify(token, process.env.JWT);
    if (verify) {
      req.user = verify;
      next();
    }
  } catch (error) {
    return res.status(404).json({ message: "Token Is Not Valid" });
  }
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(404).json({ message: "User not Authenticated" });
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(404).json({ message: "User not Authenticated" });
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
