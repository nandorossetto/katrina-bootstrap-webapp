describe('#1 Unit: ListController', function(){
    var controller, scope;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('ListController', { $scope: scope });
    }));

    it('should list 6 items', function(){
        expect(scope.tools.length).toBe(6);
    });
});
