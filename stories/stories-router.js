const router = require("express").Router();

const Stories = require("./stories-model.js");

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

router.post('/', (req, res) =>{
    const story = req.body
    Stories.insert(story)
    .then(story =>{
        res.status(201).json({message:"Success story added"})
    })
    .catch(err =>{res.status(500).json(err)})
})

module.exports = router;