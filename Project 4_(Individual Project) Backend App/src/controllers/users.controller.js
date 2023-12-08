const ErrorHandler = require("../middlewares/errorHandler");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validatePassword = require("../utils/password.validation");
const signUpValidation = require("../validations/signUpValidation/signUp.validation");
const loginValidation = require("../validations/loginValidation/login.validation");

const signUp = async (req, res) => {
  try {
    const { username, firstName, lastName, email, password, repassword } =
      req.body;

    const validationResult = signUpValidation(
      username,
      firstName,
      lastName,
      email,
      password,
      repassword
    );

    if (validationResult) {
      const encryptPasswrod = bcrypt.hashSync(
        password,
        bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS))
      );

      const newUser = await User.create({
        username,
        firstName,
        lastName,
        email,
        password: encryptPasswrod,
      });

      await newUser.save();
      res.send("BERHASIL MENDAFTARKAN AKUN!");
    }
  } catch (err) {
    const { status = 500, message } = err;
    res.status(status).send({ Error: message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const credentialsValidation = loginValidation(username, password);

    if (credentialsValidation) {
      const user = await User.findOne({ where: { username: username } });

      if (!user) {
        throw new ErrorHandler("Akun tidak ada!", 400);
      }
      const result = await validatePassword(password, user.password);
      if (result) {
        const token = jwt.sign(
          { username: user.username },
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        // Set the cookie
        res.cookie("token", token, { htttpOnly: true });

        res.status(200).send({
          message: `Berhasil login sebagai ${user.firstName} ${user.lastName}`,
        });
      } else {
        throw new ErrorHandler("Password salah!", 400);
      }
    }
  } catch (err) {
    const { status = 500, message } = err;
    res.status(status).send({ Error: message });
  }
};

module.exports = { signUp, login };
