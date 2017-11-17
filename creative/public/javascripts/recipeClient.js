angular.module('recipeApp', [])
.controller('recipeCtrl',[
'$scope',
'$http',
function($scope, $http) {
 $scope.test = "Made with Love, by Love"
 $scope.recipeList = []
 
 $scope.searchAPI = function() {
  $scope.recipeList = []
  var foodURL = "Recipes?q="+$scope.mySearch
  $.getJSON(foodURL, function(data){
   var nameNurl
     $.each(data.recipes, function(i, val){
      nameNurl = {title: val.title, url: val.source_url}
      $scope.recipeList.push(nameNurl)
     })
   })
  }
 
 

 $scope.create = function(x){
  return $http.post('/saved', x).then(function(data){
   console.log("sent this data to be saved:", data)
  })
 }
 

 $scope.saveRecipe = function(recipe){
 if($scope.mySearch === ''){return}
	//console.log("in saveRecipe")
	$scope.create({
	 title: recipe.title,
	 url: recipe.url
	}) 
 }

}])//end of controller
