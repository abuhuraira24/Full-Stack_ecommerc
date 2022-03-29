const multer = require("multer");

const UPLOAD_DIR = "./upload/";

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, UPLOAD_DIR);
  },
  filename: (req, file, cd) => {
    console.log(file);
  },
});

const uploader = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
});

module.exports = uploader;
