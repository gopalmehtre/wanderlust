const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");         
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const {createReview, deleteReview} = require("../controllers/reviews.js");

// reviews route
// post review route
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));

// delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(deleteReview));

module.exports = router;