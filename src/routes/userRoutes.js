const express = require("express");
const { registerRequest, registerVerification, login, passwordreset, forgot, forgotreset } = require("../controllers/userController");
const authenticateReq = require("../middlewares/authenticateReq");
const { registerUserUsingGoogle, registerUserUsingFacebook, getGoogleUserData, getFacebookUserData } = require("../controllers/ssoUserController");
const userRouter = express.Router();

userRouter.post("/register-request", registerRequest);
userRouter.post("/register-verification", registerVerification);
userRouter.post("/login", login);
userRouter.post("/password-reset", passwordreset);
userRouter.post("/password-forgot", forgot);
userRouter.post("/forgot-reset", forgotreset);

userRouter.post("/registerUsingGoogle", authenticateReq, registerUserUsingGoogle)
userRouter.post("/registerUsingFacebook", authenticateReq, registerUserUsingFacebook)

userRouter.get("/userGoogleProfile/:email", getGoogleUserData)
userRouter.get("/userFacebookProfile/:profileID", getFacebookUserData)




module.exports = userRouter;