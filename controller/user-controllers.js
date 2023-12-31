const User = require("../models/user");

const jwt = require("jsonwebtoken");
const expireTime = 1 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "omar ahmed something", { expiresIn: expireTime });
};

const loginErrorHandle = (err) => {
  const jsonError = { error: "Email or Password is incorrect" };
  if (err) {
    return jsonError;
  }
};

const errorHandle = (err) => {
  let errorData = { email: "", username: "", password: "" };

  if (err.code === 11000) {
    errorData["email"] = "email is already used !";
  }

  if (
    err.message.includes(
      "neoUser validation failed" || "user validation failed"
    )
  ) {
    Object.values(err.errors).forEach(({ properties }) => {
      errorData[properties.path] = properties.message;
    });
  }
  return errorData;
};

const logout_get = (req, res) => {
  res.cookie("auth", "", { maxAge: 1 });
  res.redirect("/homepage");
};

const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.login(email, password);
    const token = createToken(data._id);
    res.cookie("auth", token, { maxAge: expireTime * 1000, httpOnly: true });
    console.log(data._id);

    res.status(201).json({ data });
  } catch (err) {
    const errors = loginErrorHandle(err);
    console.log(err);
    res.status(404).json(errors);
  }
};

const signup_post = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    const token = createToken(user._id);
    res.cookie("auth", token, { maxAge: expireTime, httpOnly: true });
    res.status(201).json({ user: user._id });
    console.log("user created");
  } catch (err) {
    const errors = errorHandle(err);
    console.log(errors);
    res.status(404).json({ errors });
  }
};

const login_get = (req, res) => {
  res.render("login");
};

const signup_get = (req, res) => {
  res.render("signup");
};

module.exports = {
  login_get,
  signup_get,
  signup_post,
  login_post,
  logout_get,
};
