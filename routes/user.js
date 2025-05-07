const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");

router.get("/signup", userController.renderSignup);

router.post("/signup", wrapAsync(userController.signupUser));

router.get("/login", userController.renderLogin);

router.post("/login", saveRedirectUrl,passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    }), userController.loginUser);

router.get("/logout", userController.logoutUser);

module.exports = router;