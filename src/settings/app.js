var app = angular.module('settings', ['WixControls']);

app.controller('controller', ['$scope', function($scope, myservice) {
    console.log('setup');
    this.defaultTabIndex = 0;
    this.onUpdate = function(key) {
        return function(value) {
            const data = {
                key: key,
                value: value
            };
            Wix.Settings.triggerSettingsUpdatedEvent(data);
        }
    };
    this.onButtonClicked = function() {
        console.log("Main button clicked - switch to tab #1");
        $scope.refs.panelTabs.setActiveTab(1);
    };
}]);
