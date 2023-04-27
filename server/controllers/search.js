const SearchList = require("../models/search");
const Token = require("../models/token");

exports.getSearchResult = (req, res, next) => {
  try {
    //Search queries
    const keywords = req.body.keywords;
    const genreId = req.body.genreId;
    const mediaType = req.body.mediaType;
    const languageId = req.body.languageId;
    const year = req.body.year;
    const searchResult = SearchList.search(
      keywords,
      genreId,
      mediaType,
      languageId,
      year
    );
    console.log(searchResult);
    //Authentication
    const userId = req.query.userId;
    const token = req.query.token;
    const tokenAuth = Token.authenticate(userId, token);
    if (!tokenAuth) {
      res.status(401).json({ message: "Unauthenticated" });
      next();
    }
    if (tokenAuth) {
      if (keywords === "") {
        res.status(400).json({ message: "Not found keyword parram" });
      } else {
        res.status(200).json({
          result: searchResult,
          page: 1,
          // total_pages: searchResult.length / 20,
        });
      }
    }
  } catch (err) {
    throw new Error(err);
  }
};
