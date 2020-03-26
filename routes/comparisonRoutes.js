const express = require("express");
const router = express.Router();
const resemble = require("resemblejs");

router.post("/comparison", async (req, res) => {
  if (!req.files) {
    res.sendStatus(400);
  }

  const { image, imageToCompare } = req.files;

  const diff = await resemble(image.data)
    .compareTo(imageToCompare.data)
    .onComplete(data => {
      res.send(data);
    });
});

module.exports = router;
