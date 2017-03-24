// create the controller and inject the Angular $scope
TodoApp.controller('todosController', function todosController($scope, $http, $location, constants) {
    // set our current page for pagination purposes
     $scope.currentPage=1;
     $scope.lastPage=1;
     $scope.loadMoreText='Load More Todos...';
     
    //retrieve todos listing from API
    $http.get("/api/todos", {params: { page: $scope.currentPage }})
        .success(function(response) {
            $scope.todos = response.data;
            $scope.currentPage = response.current_page;
            $scope.lastPage = response.last_page;
             
            if($scope.currentPage >= $scope.lastPage){
                $scope.loadMoreText='All Todos Loaded!';
            }
        });
     
    // infinite scroll of the todos
    $scope.loadMoreTodos = function() {
        // increase our current page index
        $scope.currentPage++;
         
         
        //retrieve todos listing from API and append them to our current list
        $http.get("/api/todos", {params: { page: $scope.currentPage }})
            .success(function(response) {
                $scope.todos = $scope.todos.concat(response.data);
                $scope.currentPage = response.current_page;
                $scope.lastPage = response.last_page;
                 
                if($scope.currentPage >= $scope.lastPage){
                    $scope.loadMoreText='All Todos Loaded!';
                }
            });
             
    };
     
    // adding a todo
    $scope.addTodo = function() {
             
        //add the new todo to our listing
        $http.post("/api/todos", $scope.todo)
            .success(function(response) {
                 
                console.log(response);
                 
                // close the modal
                $scope.closeModal();
                 
                // load the page for our newly created todo
                location.reload();
                 
 
            })
            .error(function(response, status, headers, config) {
                // alert and log the response
                alert('Failed to add the Todo: [Server response: '+status + '] - ' +response.name[0]);
                console.log(response);
                 
            });
 
    }
     
$scope.deleteTodo = function(id){
        var confirmDelete = confirm('Are you sure you want to delete this description?');
        if (confirmDelete) {
            $http.delete("/api/todos/" + id)
            .success(function(response) {
                 
                console.log(response);
            location.reload();
                 
 
            })
            .error(function(response, status, headers, config) {
                // alert and log the response
                alert('Failed to add the description: [Server response: '+status + '] - ' +response.name[0]);
                console.log(response);
                 
            });
        }else{
            return false;
        }
    }
    // display the modal form
    $scope.showModal = function() {
        $('#addTodoModal').modal('show');
    }
     
    // display the modal form
    $scope.closeModal = function() {
        $('#addTodoModal').modal('hide');
    }
});