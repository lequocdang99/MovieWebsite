const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "userToken.json"
);

const Token = {
  all: function () {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
  authenticate: function (userId, token) {
    return (
      Token.all().filter((user) => user.userId === userId)[0].token === token
    );
  },
};

module.exports = Token;
