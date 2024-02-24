const express = require("express");
const multer = require("multer");
const { getIndex, getUpload,handleDownload } = require("../controller/file");

const upload = multer({dest:"uploads"})

const router = express.Router();

router.get("/",getIndex);

router.post("/upload", upload.single("file"),getUpload)

router.route("/file/:id").get(handleDownload).post(handleDownload)

module.exports = router;