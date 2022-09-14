var express = require('express');
var router = express.Router();
//import user schema 
const User = require('../models/UserSchema')
/* Login */
router.get('/login', function(req, res, next) {
  res.render('login',{title:"Halaman Login"});
});
/* Register */
router.get('/register', function(req, res, next) {
  res.render('register',{title:"Halaman Register"});
});
/* Post Register */
router.post('/register',(req, res, next) => {
  const {name,email,password,password2} = req.body
  console.log(req.body);
  let errors = [];
  //biar semua field terisi
  if(!name || !email || !password || !password2){
    errors.push({msg:"Silahkan lengkapi data anda"})
    console.log("Silahkan lengkapi data anda")
  }
  //samain pass 1 dan 2 
  if(password != password2){
    errors.push({msg:"Password anda tidak sama"})
    console.log("Password anda tidak sama")
  }
  if(errors.length > 0){
    ("register",{
      errors,name,email,password,password2
    })
  }
  else{
    User.findOne({email:email}).then(
      user => {
        if(user){
          errors.push({msg:"Email sudah terdaftar"});
          console.log("Email sudah terdaftar");
          res.render("register",{
            errors,
            name,
            email,
            password,
            password2
          });
      }else{
        const newUser = new User({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password,
        })
        newUser.save().then(user => {
          console.log(user);
          console.log("Silahkan Login");
          res.redirect("/auth/login")
        }).catch(err => console.log(err))
      }
  })
  }
});

router.get("/logout" , function(req,res){
  res.redirect("/");
})
module.exports = router;
