var express = require('express');
var router = express.Router();

/* get all movies*/
router.get('/', function(req, res, next) {
  res.render('movies/allMovies',{title:"Halaman Get Movies"});
});
/* create movies */
router.get('/create', function(req, res, next) {
  res.render('movies/createMovies',{title:"Halaman Input Movies"});
});
/* update movies */
router.get('/update/:moviesId', function(req, res, next) {
    res.render('movies/updateMovies',{title:"Halaman Update Movies",moviesId:req.params.moviesId});
  });

//Action Create
router.post("/create",function(req,res,next){

})
//Action Update
router.put("/update/:moviesId",function(req,res,next){
    
})
//Action delete
router.delete("/delete/:moviesId",function(req,res,next){
    
})

module.exports = router;

