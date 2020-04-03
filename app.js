const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

router.get('/',function(req, res){
  res.render('/routes/index.js');

});
router.get('/food', function(req, res) {
  res.render('a');
});


router.get('/layout',function(req,res){
  res.render('layout');
});


app.use('/', router);
app.listen(process.env.port || 8081);

console.log('Running at Port 8081');
