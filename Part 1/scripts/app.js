var s = [];
var serve = angular.module('myApp', []);

serve.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('ShowUser', {
        url: '/ShowUser',
        templateUrl: '../pages/user.html'
    });
});

app.factory("myFactory", function () {
    var savedData = {}
    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    };
});

serve.controller('myCtrl', function($scope, $http) {
    $scope.servers =  $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        $scope.servers = response.data;    
    });
});
serve.controller('myPost', function($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(resp){
            //$scope.posts = resp.data;
            var d = JSON.stringify(resp.data);
            s.push(d);
            var jsonID = JSON.parse(s);
            $scope.posts = jsonID;
            console.log('s', s);
    });
});