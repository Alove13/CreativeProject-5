angular.module('recipeApp', [])
.controller('recipeCtrl',[
'$scope',
'$http',
function($scope, $http) {
 $scope.test = "Made with Love, by Love"
 $scope.recipeList = []
 $scope.savedRecipes = []

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
 
 $scope.showSaved = function() {
  //return $http.get('/saved').then(function(data){
  $.getJSON('/saved', function(data){
  //console.log("hopefully got saved Data from DB: ", data)
  var temp
  $.each(data, function(i, val){
  temp = {title: val.title, url: val.url}
//  console.log("temp ", temp.title)
  $scope.savedRecipes.push(temp)
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

  $scope.deleteSaved = function() {
   $.ajax({
    url:'savedDelete',
    type:'DELETE',
    success: function(){
      console.log("deleted successfully")
      savedRecipes = []
    }
   })
  }

}])//end of controller
