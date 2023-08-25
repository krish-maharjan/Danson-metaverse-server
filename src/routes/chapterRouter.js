const express = require("express");
const {
  findChapterById,
  getChapter,
  createChapter,
  UpdateChapter,
  DeleteChapter,
} = require("../controllers/chapterController");
const chapterRouter = express.Router();

// get a list of chapters from the db
chapterRouter.get("/chapters", getChapter);
chapterRouter.get("/chapters/:id", findChapterById);

// add a new chapter to the db
chapterRouter.post("/chapters", createChapter);

// update a chapter in the db
chapterRouter.put("/chapters/:id", UpdateChapter);

// delete a chapter from the db
chapterRouter.delete("/chapters/:id", DeleteChapter);

module.exports = chapterRouter;
