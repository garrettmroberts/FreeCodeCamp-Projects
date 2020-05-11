const mongoose = require(mongoose);

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  "original_url": String,
  "short_url": String
});

const url = mongoose.model("url", urlSchema);
module.exports = url;