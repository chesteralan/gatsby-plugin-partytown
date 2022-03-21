const path = require("path");
const { copyLibFiles } = require('@builder.io/partytown/utils');

exports.onPreBootstrap = async () => {
  copyLibFiles(path.join(__dirname, "..", "..", "public", "~partytown"));
};