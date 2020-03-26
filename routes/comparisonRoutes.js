const express = require("express");
const router = express.Router();
const resemble = require("resemblejs");

router.post("/comparison", async (req, res) => {
  if (!req.files) {
    res.sendStatus(400);
  }

  const { image, imageToCompare } = req.files;

  resemble(image.data)
    .compareTo(imageToCompare.data)
    .ignoreAntialiasing()
    .onComplete(data => {
      res.send(data);
    });
});

module.exports = router;
