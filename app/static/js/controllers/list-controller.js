var ListController = angular.module('ListingModule', []);

ListController.controller('ListController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.tools = [
            {'name': 'HTML5'},
            {'name': 'CSS3'},
            {'name': 'Javascript'},
            {'name': 'Angularjs'},
            {'name': 'Gruntjs'},
            {'name': 'Karmajs'}
        ];
    }]
);
