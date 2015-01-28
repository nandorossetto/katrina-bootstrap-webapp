var katrina = angular.module('katrina', [
    'ngRoute',
    'ListingModule'
]);

//routes
katrina.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'views/list.html',
        controller  : 'ListController'
    })
    .otherwise({
        redirectTo: '/404',
        templateUrl : 'views/404.html'
    });
}]);
