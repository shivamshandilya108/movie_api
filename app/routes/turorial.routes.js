module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new movie
    router.post("/", tutorials.create);
  
    // Retrieve all 
    router.get("/", tutorials.findAll);
  
    
    router.get("/published", tutorials.findAllPublished);
  
  
    router.get("/:id", tutorials.findOne);
  
    // Update 
    router.put("/:id", tutorials.update);
  
    // Delete 
    router.delete("/:id", tutorials.delete);
  

    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };