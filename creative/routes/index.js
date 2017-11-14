var express = require('express')
var router = express.Router()
var request = require('request')
/* GET home page. */
router.get('/', function(req, res) {
});

router.get('/savedRecipes', function(req, res){
 var recipeUrl = "http://food2fork.com/api/search?key=eb2b238428ee5a9eea38395e0c399aca&q="
 console.log("in savedRecipes")  
 console.log("recipeUrl: ", recipeUrl)
 console.log("req.query.q: ", req.query.q)
 recipeUrl += req.query.q
 request(recipeUrl).pipe(res)//takes care of CORS issue 
})
module.exports = router;
