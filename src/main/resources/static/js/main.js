
var app = angular.module('patientsApp',['ngRoute','angular.filter']);

    // Конфігурація яка при переході на ссилку відкриває відповідний
    // цій ссилці шаблон та підключає для нього потрібний контроллер
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
        // URL створення пацієнта
        .when('/patient/save',{
            templateUrl: '/html/save.html',
            controller: 'SendPatientCtrl'
        })
        // URL видалення пацієнта
        .when('/patientdelete/:patientdelete',{
            controller: 'SendPatientCtrl'
        })
        // URL редагування пацієнта
        .when('/patientedit/:patienteditid',{
            templateUrl: '/html/edit.html',
            controller: 'SendPatientEditCtrl'
        })
        // URL виводу всіх даних по поцієнту id якого = patientIdDetails
        .when('/patientdetails/:patientIdDetails',{
            templateUrl: '/html/patientDetail.html',
            controller: 'PatientDetailCtrl'
        })
        // URL редагування коментарія
        .when('/commentedit/:commentforedit',{
            templateUrl: '/html/commentedit.html',
            controller: 'SendCommentForDeleteCtrl'
        })
        // перенаправляє з головної сторінки на інформацію про 1 пацієнта
        .when('/',{
            redirectTo:'patientdetails/1'
        })
}]);

    // Контроллер який отримує дані про піцієнтів з Json в масив patients

app.controller('PatientsCtrl', function($scope,$http) {
        $scope.patients=[];
    $http.get("/api/patient").then(function(responce) {
        $scope.patients=responce.data;
    });
});

        // Контроллер який отримує та передає дані пацієнта  для видалення
        // і також отримує і передає дані коментарія для створення
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
        // Контроллер отримує та передає дані пацієнта для збереження в БД
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
        // Контроллер отримує та передає дані для редагування пацієнта
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

        // Контроллер який отримує всі дані коментарія в масив
        // та отримує дані коментарія та передає їх на видалення чи редагування
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
