angular.module('recipeApp', [])
.factory('recipeFetcher', recipeFetcher)
.controller('recipeCtrl', recipeCtrl)
function recipeFetcher ($http) {
 var API_ROOT = 'savedRecipes'
 return {
  get: function() {
   return $http
   .get(API_ROOT)
   .then(function(response){
    return response.data
   })
  },

  tryit: function() {
   var recipeUrl = "/savedRecipes"
   return $http
    .get(recipeUrl)
    .then(function(response) {
     console.log("get worked!")
     console.log("data: ", data)
     return response.data    
    })
  }
 
 }//all returned stuff
}//end of factory

function recipeCtrl ($scope, recipeFetcher) {
 $scope.test = "Made with Love, by Love"
 
 $scope.pastSearches = []//this will be stored in Mongo to help for future searches
 $scope.savedRecipes = []//this object will be sent to server to be added to mongo to remember foreva!

 $scope.updatePastSearches = function() {
  $scope.pastSearches.push({search: $scope.inputRecipe}) //will be wiped unless send to DB
  //  console.log($scope.inputRecipe.search)
 }

}
