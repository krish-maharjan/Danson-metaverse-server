const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const ChapterSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  published: {
    type: Boolean,
    default: false,
  },
  publishedDate: {
    type: Date,
  },
  publishedBy: {
    type: String,
  },
});

const Chapter = mongoose.model("chapter", ChapterSchema);

module.exports = Chapter;
