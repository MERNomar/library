const User = require("../models/user");
const Books = require("../models/book");

const errorHandle = (err) => {
  let errorData = { email: "", username: "", password: "" };

  if (err.code === 11000) {
    errorData["email"] = "email is already used !";
    return errorData;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errorData[properties.path] = properties.message;
    });
  }
  return errorData;
};

const create_book = (req, res) => {
  const book = new Books(req.body);
  book
    .save()
    .then((e) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const main_getter = (req, res) => {
  Books.find()
    .then((books) => {
      res.render("index", { books });
    })
    .catch((err) => {
      res.send(err);
    });
};

const book_delete = (req, res) => {
  const id = req.params.id;
  Books.findByIdAndDelete(id)
    .then((e) => res.redirect("/"))
    .catch((err) => res.redirect("/"));
};

const login_get = (req, res) => {
  res.render("login");
};

const signup_get = (req, res) => {
  res.render("signup");
};

const signup_post = async (req, res) => {
  console.log(req.body)
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (err) {
    const errors = errorHandle(err);
    res.status(404).json(errors);
  }
};

const login_post = (req, res) => {
  const { email, password } = req.body;

  console.log(email + password);
};

module.exports = {
  main_getter,
  create_book,
  book_delete,
  login_get,
  signup_get,
  signup_post,
  login_post,
};
