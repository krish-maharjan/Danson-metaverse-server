const express = require("express");
const router = express.Router();
const Chapter = require("../models/chapter");

const getChapter = (req, res, next) => {
  Chapter.find({})
    .then(function (chapters) {
      res.send(chapters);
    })
    .catch(next);
};

const findChapterById = (req, res, next) => {
  Chapter.findById({ _id: req.params.id })
    .then(function (chapter) {
      res.send(chapter);
    })
    .catch(next);
};

const createChapter = (req, res, next) => {
  console.log("You made a POST request: ", req.body);
  Chapter.create(req.body)
    .then(function (chapter) {
      res.send(chapter);
    })
    .catch(next);
};

const UpdateChapter = (req, res, next) => {
  Chapter.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Chapter.findOne({ _id: req.params.id }).then(function (chapter) {
        res.send(chapter);
      });
    })
    .catch(next);
};

const DeleteChapter = (req, res, next) => {
  Chapter.findByIdAndRemove({ _id: req.params.id })
    .then(function (chapter) {
      res.send(chapter);
    })
    .catch(next);
};

module.exports = {
  getChapter,
  findChapterById,
  createChapter,
  UpdateChapter,
  DeleteChapter,
};
