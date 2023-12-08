const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Kamu tidak dapat mengakses ini!" });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.clearCookie("token");
      return res.status(403).json({ error: "Silahkan login kembali!" });
    }

    req.user = decoded;

    next();
  });
};

module.exports = authentication;
