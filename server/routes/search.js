const express = require("express");
const router = express.Router();
//Search controller
const searchController = require("../controllers/search");
//Search movies by keywords
router.post("/", searchController.getSearchResult);

module.exports = router;
