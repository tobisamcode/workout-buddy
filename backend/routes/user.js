const express = require("express");

const userRouter = express.Router();
const { loginUser, signupUser } = require("../controllers/user");

// login route
userRouter.post("/login", loginUser);

// signup route
userRouter.post("/signup", signupUser);

module.exports = userRouter;
