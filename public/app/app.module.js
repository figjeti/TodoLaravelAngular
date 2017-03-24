// define the 'TodoApp' module
// also include ngRoute for all our routing needs
var TodoApp = angular.module('TodoApp', ['ngRoute']);
 
 // define our canstant for the API
TodoApp.constant('constants', {
        API_URL: 'todo.app/api/'
    });
     
// configure our routes
TodoApp.config(function($routeProvider) {
    $routeProvider
        // route for the todos page
        .when('/', {
            templateUrl : 'app/todos/todos.template.htm',
            controller  : 'todosController'
        })

        // default route

         
             
});