var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
    $scope.author = {
        'name' : 'Ray Villalobos5',
        'title' : 'Staff Author',
        'company' : 'Lynda.com'
    }
});

myApp.controller('MyCalc', function MyCalc($scope){
    $scope.author = {
        'name' : 'sonam',
        'title' : 'Staff Author',
        'company' : 'Lynda.com',
        'number': '777',
        'project': 'Calculator'
    }
});
