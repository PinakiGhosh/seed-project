var express = require('express');
var router = express.Router();
var User=require('../models/user')

router.get('/', function (req, res, next) {
    User.findOne({},function (err,doc) {
        if(err){
            return res.send('Error '+err);
        }
        res.render('node',{email:doc.email});
    })
    //res.render('node');
});

// router.get('/message/:msg', function (req, res, next) {
//     res.render('node',{message:req.params.msg});
// });

router.post('/',function (req,res,next) {
    var email = req.body.email;
    var user= new User({
        firstName:"Pinaki",
        lastName:"Ghosh",
        password:"Password",
        email: email
    });
    user.save()
    res.redirect('/')
})

module.exports = router;
