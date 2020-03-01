const router = require("express").Router();

const Stories = require("./stories-model.js");

router.get("/", (req, res) => {
  Stories.find()
    .then(stories => {
      res.json(stories);
    })
    .catch(err => res.send(err));
});

router.delete("/:id", (req, res) => {
  Stories.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "The story has been deleted." });
      } else {
        res.status(404).json({ message: "The story id could not be found." });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error removing the story"
      });
    });
});

router.put("/:id", (req, res) => {
  Stories.update(req.params.id, req.body)
    .then(story => {
      if (story) {
        res.status(200).json(story);
      } else {
        res.status(404).json({ message: "The story could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the story"
      });
    });
});

module.exports = router;
