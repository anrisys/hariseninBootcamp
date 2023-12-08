const ErrorHandler = require("../../middlewares/errorHandler");
const signUpSchema = require("./signUp.schema");

const signUpValidation = (
  username,
  firstName,
  lastName,
  email,
  password,
  repassword
) => {
  const { error } = signUpSchema.validate({
    username,
    firstName,
    lastName,
    email,
    password,
    repassword,
  });
  if (error) {
    throw new ErrorHandler(error.message, 400);
  }
  if (password !== repassword) {
    throw new ErrorHandler("Kedua password tidak sama", 400);
  }
  return true;
};

module.exports = signUpValidation;
