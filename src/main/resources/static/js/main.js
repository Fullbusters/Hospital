var app = angular.module('patientsApp',[]);

app.controller('PatientsCtrl', function($scope,$http) {
        $scope.patients=[];

    $http.get("/api/patient").then(function(responce) {
        $scope.patients=responce.data;
    });

    $http.get("/api/comment").then(function (responce) {
        $scope.comments=responce.data;
    });
});




