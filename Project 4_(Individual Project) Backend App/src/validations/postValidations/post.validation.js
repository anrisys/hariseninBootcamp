const ErrorHandler = require("../../middlewares/errorHandler");
const postValidation = require("./post.schema");

const validatePost = (title, body) => {
  const { error } = postValidation.validate({ title, body });
  if (error) {
    throw new ErrorHandler(error.message, 400);
  } else {
    return true;
  }
};

module.exports = validatePost;
