const express = require("express");

const multer = require("multer");

const multerConfig = require("./../../config/multer");

const router = express.Router();

const archiveService = require("./../services/archiveService");

router.get("/all", archiveService.all);

router.get("/list-from-box/:idBox", archiveService.listFromBox);

router.post(
  "/upload/:idBox",
  multer(multerConfig).single("file"),
  archiveService.upload
);

router.delete("/remove/:idArchive", archiveService.delete);

module.exports = app => app.use("/v1/archive", router);
