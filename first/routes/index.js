var express = require('express');
var router = express.Router();

/* Welcome */
router.get('/', function(req, res, next) {
  res.render('Welcome', { title: 'Welcome' });
});
//halaman dashboard
router.get('/dashboard',function(req,res,next){ 
  res.render("dashboard",{title:"Halaman dasboard"})
})

module.exports = router;
