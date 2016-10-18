var demoApp = angular.module('demo', ['ngRoute']);
demoApp.controller('MainController', ['$scope', 'guidService', function ($scope, guidService) {

    // Setup a view model 
    var vm = {};

    vm.list = [
        { _id: guidService.createGuid(), details: 'Demo First Item' },
        { _id: guidService.createGuid(), details: 'Demo Second Item' }
    ];

    vm.addItem = function () {
        // TODO: send to server then,
        vm.list.push({
            _id: guidService.createGuid(),
            details: vm.newItemDetails
        });
        vm.newItemDetails = '';
    };

    vm.removeItem = function (itemToRemove) {
        // TODO: delete from the server then
        vm.list = vm.list.filter(function (item) { return item._id !== itemToRemove._id; });
    };

    // For new items: 
    vm.newItemDetails = '';

    // expose the vm using the $scope
    $scope.vm = vm;
}]);

demoApp.service('guidService', function () {
    return {
        createGuid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    };
});