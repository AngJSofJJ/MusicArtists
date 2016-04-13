(function(){
  angular.module('MusicArtistsApp', [])
      .controller('MusicArtistsList', ['$scope','$http', function($scope, $http){
          //Assign 'this' to a variable
          var controller = this;

          //Initialize the list of Music Artists
          controller.musicartists = [];

          controller.editMode = false;


          //Method to load the remote data from the server
          var loadRemoteData = function(){
              $http.get('/artisansList').success(function(response){
                  controller.musicartists = response;
                  controller.NewArtist = '';
                  controller.editMode = false;
              });
          };

          // Invoke the load remote data function
          loadRemoteData();

          //Method to insert a new artist in the database
          controller.addArtist = function(){
                $http.post('/artisansList',controller.NewArtist).success(function(response){
                   console.log('Record inserted successfully');
                    loadRemoteData();
                    $scope.message='New Artist Inserted successfully';
                });
          };

          //method to remove an artist
          controller.remove = function(id){
                console.log(id);
                $http.delete('/artisansList/' + id).success(function(response){
                   loadRemoteData();
                });
          };

          //Method to Edit
          controller.edit = function(id){
                controller.editMode = true;
                $http.get('/artisansList/' + id).success(function(response){
                    controller.NewArtist = response;
                });
          };

          //Method to update the record
          controller.update = function(id){
                controller.editMode = true;
                $http.put('/artisansList/' + id, controller.NewArtist).success(function(response){
                    loadRemoteData();
                });
          };

          //Method to clear the inout fields
          controller.clearAll = function(){
                controller.NewArtist = '';
                controller.editMode = false;
          };

      }]);
}());