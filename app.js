const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

router.get('/',function(req, res){
  res.render('layout');

});
router.get('/food', function(req, res) {
  res.render('a');
});

router.get('/syllabus',function(req,res){
  res.render('syllabus');
});
router.get('/lol',function(req, res){
  res.render('lol');
});


app.use('/', router);
app.listen(8081);

console.log('Running at Port 8081');
