const router = require("express").Router();

const Stories = require("./stories-model.js");
const restricted = require('../auth/restricted-middleware.js');

router.get("/", (req, res) => {
  Stories.get()
    .then(stories => {
      res.json(stories);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Stories.getById(id)
    .then(story =>{
      if(id){
       res.status(200).json(story)
      }else {        
         res.status(404).json({message: 'No story with that ID exists'})
      }
    })
    .catch(err =>{
      res.status(500).json({errorMessage: 'Could not retrieve story'})
    })
  });

router.post('/', restricted, (req, res) =>{
    const story = req.body
    Stories.insert(story)
    .then(story =>{
        res.status(201).json({message:"Success story added"})
    })
    .catch(err =>{res.status(500).json(err)})
})

router.delete("/:id", restricted, (req, res) => {
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

router.put("/:id", restricted, (req, res) => {
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

router.get('/:id/stories', restricted, (req, res) => {
    const { id } = req.params;
  
    Stories.findStories(id)
    .then(stories => {
      if (stories.length) {
        res.json(stories);
      } else {
        res.status(404).json({ message:  'Could not find stories for given user' })
      }
    })
    .catch(({ name, message ,stack}) =>{res.status(500).json({name, message, stack});
  });
  });

module.exports = router;