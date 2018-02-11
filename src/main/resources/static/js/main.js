var app = angular.module('patientsApp',['ngRoute','angular.filter']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvide , $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvide
        .when('/patient/save',{
            templateUrl: '/html/save.html',
            controller: 'SendPatientForSaveCtrl'
            // controller:function(){
            //     window.location.replace('/1');
            // },
            // template : "<div></div>"
        })
        .when('/patientdetails/:patientIdDetails',{
            templateUrl: '/html/patientDetail.html',
            controller: 'PatientDetailCtrl'
        })
        // .when('/patient/save', {
        //     controller:function(){
        //         window.location.replace('/');
        //     },
        //     template : "<div></div>"
        // });

}]);

app.controller('PatientsCtrl', function($scope,$http) {
        $scope.patients=[];

    $http.get("/api/patient").then(function(responce) {
        $scope.patients=responce.data;
    });
});

app.controller('PatientDetailCtrl', ['$scope', '$http', '$routeParams', function($scope,$http, $routeParams){
    $scope.patientIdDetails=$routeParams.patientIdDetails;
    if (isUndefined($scope.patientIdDetails)){
        $scope.patientIdDetails=1;
    }
    console.log('patientId  +'+$scope.patientIdDetails+'+');
    $http.get("/api/comment").then(function (responce) {
        $scope.comments=responce.data;
    });
}]);

app.controller('SendPatientForSaveCtrl',['$scope', '$http', function ($scope, $http) {
    $scope.patient={};
    $scope.sendPatientForm=function (patient) {
        $http({
            method: "POST",
            url: '/patient/savepatient',
            data: $.param(patient),
            headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
    }
}]);

app.controller('SendCommentForSaveCtrl',['$scope', '$http', function ($scope, $http) {
    $scope.comment={};
    $scope.comment.patient=$scope.patientIdDetails;
    $scope.sendCommentForm=function (comment) {
        $http({
            method: "POST",
            url: '/comment/save',
            data: $.param(comment),
            headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
    }
}]);
