var express = require('express')
var router = express.Router()
var request = require('request')
var mongoose = require('mongoose')
var Recipe = mongoose.model('Recipe')


/* GET home page. */
router.get('/', function(req, res, next) {
});

router.get('/saved', function(req, res, next){
 Recipe.find(function(err, list){
  if(err) {return next(err)}
  res.json(list) 
 })
})

router.get('/Recipes', function(req, res, next){
 var recipeUrl = "http://food2fork.com/api/search?key=eb2b238428ee5a9eea38395e0c399aca&q="
// console.log("req.query.q: ", req.query.q)
 recipeUrl += req.query.q
 request(recipeUrl).pipe(res)//takes care of CORS issue 
})

router.post('/saved', function(req, res, next){
 var recipe = new Recipe(req.body)
 recipe.save(function(err, recipe){
  if(err) {return next(err)}
//   console.log("in /saved route recipe: ",recipe)
   res.json(recipe) 
  })
})

router.delete('/savedDelete', function(req, res, next){
 Recipe.remove({}, function(err, removedStuff){
  if(err) return console.error(err)
  else {
   console.log(removedStuff)
   res.sendStatus(200)
  }
 })
})

module.exports = router;
