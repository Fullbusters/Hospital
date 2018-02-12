var app = angular.module('patientsApp',['ngRoute','angular.filter']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvide , $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    // controller:function(){
    //     window.location.replace('/1');
    // },
    // template : "<div></div>"
    $routeProvide
        .when('/patient/save',{
            templateUrl: '/html/save.html',
            controller: 'SendPatientCtrl'
        })
        .when('/patientdelete/:patientdelete',{
            controller: 'SendPatientCtrl'
        })
        .when('/patientedit/:patienteditid',{
            templateUrl: '/html/edit.html',
            controller: 'SendPatientEditCtrl'
        })
        .when('/patientdetails/:patientIdDetails',{
            templateUrl: '/html/patientDetail.html',
            controller: 'PatientDetailCtrl'
        })
        .when('/commentedit/:commentforedit',{
            templateUrl: '/html/commentedit.html',
            controller: 'SendCommentForDeleteCtrl'
        })
        .when('/',{
            redirectTo:'patientdetails/1'
        })
}]);

app.controller('PatientsCtrl', function($scope,$http) {
        $scope.patients=[];
    $http.get("/api/patient").then(function(responce) {
        $scope.patients=responce.data;
    });
});

app.controller('PatientDetailCtrl', ['$scope', '$http', '$routeParams','$location', function($scope,$http, $routeParams, $location){
    $scope.patientIdDetails=$routeParams.patientIdDetails;
    $scope.patient={};
    $scope.sendPatientDelete=function (patient) {
        $scope.patient.patientId=$scope.patientIdDetails;
        $http({
            method: "POST",
            url: '/patient/delete',
            data: $.param(patient),
            headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
        $location.path("/");
    };
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

app.controller('SendPatientCtrl',['$scope', '$http','$location', function ($scope, $http, $location) {
    $scope.patient={};
    $scope.sendPatientForm=function (patient) {
        $http({
            method: "POST",
            url: '/patient/savepatient',
            data: $.param(patient),
            headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
        $location.path("/");
    };
}]);

app.controller('SendPatientEditCtrl',['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams, $location) {
    $scope.patienteditid=$routeParams.patienteditid;
    $scope.patient={};
    $scope.patient.patientId=$scope.patienteditid;
    $scope.sendPatientEditForm=function (patient) {
        $http({
            method: "POST",
            url: '/patient/savepatient',
            data: $.param(patient),
            headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
        $location.path("/patientdetails/"+$scope.patienteditid);
    }
}]);


app.controller('SendCommentForDeleteCtrl',['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.commentforedit=$routeParams.commentforedit;
    $scope.comment={};
    $scope.comments=[];
    $http.get("/api/comment").then(function (responce) {
        $scope.comments=responce.data;
    });
    $scope.comment.commentId=$scope.commentforedit;
    $scope.sendCommentforDelete=function (comment) {
        $http({
            method: "POST",
            url: '/comment/delete',
            data: $.param(comment),
            headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
    };
    $scope.sendCommentforEdit=function (comment) {
        console.log('commentforedit  +'+comment+'+');
        $http({
            method: "POST",
            url: '/comment/save',
            data: $.param(comment),
            headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
    }
}]);
