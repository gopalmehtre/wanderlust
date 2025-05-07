const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");        
const {isLoggedIn, isOwner} = require("../middleware.js");
const {validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


// Index route 
router.route("/")
.get(wrapAsync(listingController.index));

// new route 
router.get("/new", isLoggedIn,listingController.renderNewForm);

// show route 
router.get("/:id", wrapAsync(listingController.showListing));

// create route
router.post("/",isLoggedIn,upload.single('listing[image]'), validateListing ,wrapAsync(listingController.createListing));

// edit route 
router.get("/:id/edit",isLoggedIn,isOwner,listingController.renderEditForm );

// update route 
router.put("/:id",isLoggedIn,isOwner, upload.single('listing[image]'), validateListing , wrapAsync(listingController.updateListing));

// delete route 
router.delete("/:id",isLoggedIn, isOwner, listingController.deleteListing);

module.exports = router;