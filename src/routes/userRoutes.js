const express = require("express");
const userRouter = express.Router();

// controllers
const { registerRequest, registerVerification, login, passwordreset, forgot, forgotreset,verifyEmail, emailVerificationRequest } = require("../controllers/userController");
const { registerUserUsingGoogle, registerUserUsingFacebook, getGoogleUserData, getFacebookUserData } = require("../controllers/ssoUserController");

// middlewares
const authenticateReq = require("../middlewares/authenticateReq");
const userAuth = require("../middlewares/userAuth")

userRouter.post("/register-request", registerRequest);
userRouter.post("/register-verification", registerVerification);
userRouter.post("/verify-email-request", emailVerificationRequest);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/login", login);
userRouter.post("/password-reset", userAuth, passwordreset);
userRouter.post("/password-forgot", forgot);
userRouter.post("/forgot-reset", forgotreset);

userRouter.post("/registerUsingGoogle", authenticateReq, registerUserUsingGoogle)
userRouter.post("/registerUsingFacebook", authenticateReq, registerUserUsingFacebook)

userRouter.get("/userGoogleProfile/:email", getGoogleUserData)
userRouter.get("/userFacebookProfile/:profileID", getFacebookUserData)




module.exports = userRouter;