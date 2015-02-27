var newsBeat = angular.module('newsBeat', ['ui.router']);

newsBeat.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  
});
