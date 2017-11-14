angular.module('recipeApp', [])
.controller('recipeCtrl', 
['$scope', 
function($scope){
 $scope.test = "Leggo my Eggo"
 
 $scope.pastSearches = []//this will be stored in Mongo to help for future searches
 $scope.savedRecipes = []//this object will be sent to server to be added to mongo to remember foreva!

 $scope.updatePastSearches = function() {
  $scope.pastSearches.push({search: $scope.inputRecipe}) //will be wiped unless send to DB
  console.log($scope.inputRecipe.search)
 } 
}])
