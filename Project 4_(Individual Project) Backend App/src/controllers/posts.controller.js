const ErrorHandler = require("../middlewares/errorHandler");
const { User, Post } = require("../models");
const validatePost = require("../validations/postValidations/post.validation");

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    res.send({ allPosts });
  } catch (err) {
    const { status = 500, message } = err;
    res.status(status).send({ Error: message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      throw new ErrorHandler("Post tidak ditemukan", 404);
    }
    res.status(200).send({ post });
  } catch (err) {
    const { status = 500, message } = err;
    res.status(status).send({ Error: message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const validationResult = validatePost(title, body);
    if (validationResult) {
      const { username } = req.user;
      const user = await User.findOne({ where: { username } });
      const newPost = await Post.create({
        title,
        body,
        user_id: user.id,
      });
      await newPost.save();
      res
        .status(200)
        .send({ message: "Berhasil membuat post baru!", post: newPost });
    }
  } catch (err) {
    const { status = 500, message } = err;
    res.status(status).send({ Error: message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const updatedPost = await Post.update({ title, body }, { where: { id } });
    if (updatedPost === 0) {
      throw new ErrorHandler("Post tidak ditemukan!", 404);
    }

    res.send({
      message: "Berhasil memperbaharui post!",
    });
  } catch (err) {
    const { status = 500, message } = err;
    res.status(status).send({ Error: message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.user;
    const post = await Post.findByPk(id);
    if (!post) {
      throw new ErrorHandler("Post tidak ditemukan!", 404);
    }
    const user = await User.findOne({ where: { username } });
    if (user.id !== post.user_id) {
      throw new ErrorHandler("Anda tidak dapat menghapus post ini", 403);
    }

    await post.destroy();
    if (post === 0) {
      throw new ErrorHandler("Post tidak ditemukan!", 404);
    }
    res.status(200).send({ message: "Berhasil menghapus post" });
  } catch (err) {
    const { status = 500, message } = err;
    res.status(status).send({ Error: message });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
