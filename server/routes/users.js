var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
/* GET users listing. */
router.post('/login', function(req, res, next) {
  const {uname,pwd} = req.body;
  if(uname == 'sachin' && pwd === 'mumbai') {
    var token = jwt.sign(req.body,'my-token')
    res.send(token);
  }else{
    res.send(false);
  }
});

router.get('/get-user', function(req, res, next) {
  res.send('My name is Sachin');
});

router.get('/get-acc', function(req,res,next){
  var token = req.headers.authorization;
  if(token){
    jwt.verify(token,'my-token',function(e){
      if(e){
        res.send('Invalid Token') 
      }else{
        next()
      }
    })
  }else{
    res.send("Token Missing")
  }
},
function(req, res, next) {
  res.send('My Accno is 34343 and pwd 353434343');
});

module.exports = router;
