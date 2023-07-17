const express = require("express");
const {registerRequest, registerVerification, login, passwordreset, forgot, forgotreset} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/register-request", registerRequest);
userRouter.post("/register-verification", registerVerification);
userRouter.post("/login", login);
userRouter.post("/password-reset", passwordreset);
userRouter.post("/password-forgot", forgot);
userRouter.post("/forgot-reset", forgotreset);

module.exports = userRouter;