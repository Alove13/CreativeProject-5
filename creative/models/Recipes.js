var mongoose = require('mongoose')
var RecipeSchema = new mongoose.Schema({
 title: String,
 url: String
})
mongoose.model('Recipe', RecipeSchema)
